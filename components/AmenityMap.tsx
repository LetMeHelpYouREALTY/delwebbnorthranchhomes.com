"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  AMENITY_CATEGORIES,
  COMMUNITY_MAP_CENTER,
  COMMUNITY_MAP_EMBED_URL,
  COMMUNITY_MAP_LABEL,
  DEFAULT_AMENITY_CATEGORY,
  getGoogleMapsApiKey,
  getGoogleMapsMapId,
  type AmenityCategoryId,
} from "@/lib/communityMapConfig";
import {
  curatedNearbyPlaces,
  type NearbyPlaceRecord,
} from "@/lib/nearbyPlacesData";
import {
  loadGoogleMaps,
  mapsAuthFailed,
} from "@/lib/google-maps-loader";
import {
  mapPlacesToResults,
  searchCategory,
  type AmenityPlaceResult,
} from "@/lib/amenityPlacesSearch";

type AmenityMapProps = {
  className?: string;
  /** Reserve map height — prevents CLS. */
  mapHeightClass?: string;
  initialCategory?: AmenityCategoryId;
  showStaticList?: boolean;
};

const MAP_HEIGHT_DEFAULT = "min-h-[420px] h-[420px] md:h-[480px]";

function buildDirectionsUrl(lat: number, lng: number, name?: string): string {
  const destination = name
    ? encodeURIComponent(`${name}@${lat},${lng}`)
    : `${lat},${lng}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
}

function buildInfoWindowElement(
  name: string,
  address: string,
  directionsUrl: string
): HTMLElement {
  const wrap = document.createElement("div");
  wrap.style.maxWidth = "260px";
  const title = document.createElement("strong");
  title.textContent = name;
  wrap.appendChild(title);
  if (address) {
    wrap.appendChild(document.createElement("br"));
    wrap.appendChild(document.createTextNode(address));
  }
  wrap.appendChild(document.createElement("br"));
  const link = document.createElement("a");
  link.href = directionsUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Directions";
  wrap.appendChild(link);
  return wrap;
}

function StaticPlaceList({
  category,
  places,
}: {
  category: AmenityCategoryId;
  places: NearbyPlaceRecord[];
}) {
  const filtered =
    places.length > 0
      ? places
      : curatedNearbyPlaces.filter((p) => p.category === category);

  if (filtered.length === 0) {
    return (
      <p className="text-sm text-text-dark mt-4">
        Select another category to see curated nearby places, or open the full{" "}
        <a href="/nearby-amenities" className="text-primary underline">
          Nearby Amenities
        </a>{" "}
        page.
      </p>
    );
  }

  return (
    <ul className="mt-4 space-y-3" aria-label="Curated nearby places">
      {filtered.map((place) => (
        <li
          key={`${place.name}-${place.address}`}
          className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
        >
          <p className="font-semibold text-primary">{place.name}</p>
          <p className="text-sm text-text-dark">{place.address}</p>
          {place.note ? (
            <p className="text-sm text-text-dark mt-1">{place.note}</p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export default function AmenityMap({
  className,
  mapHeightClass = MAP_HEIGHT_DEFAULT,
  initialCategory = DEFAULT_AMENITY_CATEGORY,
  showStaticList = true,
}: AmenityMapProps) {
  const apiKey = getGoogleMapsApiKey();
  const mapId = getGoogleMapsMapId();
  const rootRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const communityMarkerRef = useRef<google.maps.Marker | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  const [activeCategory, setActiveCategory] =
    useState<AmenityCategoryId>(initialCategory);
  const [isInView, setIsInView] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [livePlaces, setLivePlaces] = useState<AmenityPlaceResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const tabsId = useId();
  const statusId = useId();

  const enterFallback = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
    if (communityMarkerRef.current) {
      communityMarkerRef.current.setMap(null);
      communityMarkerRef.current = null;
    }
    mapRef.current = null;
    setMapReady(false);
    setLivePlaces([]);
    setLoadError(true);
  }, []);

  useEffect(() => {
    const onAuthFailure = () => enterFallback();
    window.addEventListener("gmaps:auth-failure", onAuthFailure);
    return () => window.removeEventListener("gmaps:auth-failure", onAuthFailure);
  }, [enterFallback]);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px", threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const clearPlaceMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
  }, []);

  const showCommunityMarker = useCallback((map: google.maps.Map) => {
    if (communityMarkerRef.current) {
      communityMarkerRef.current.setMap(null);
    }
    const position = {
      lat: COMMUNITY_MAP_CENTER.lat,
      lng: COMMUNITY_MAP_CENTER.lng,
    };
    communityMarkerRef.current = new google.maps.Marker({
      map,
      position,
      title: COMMUNITY_MAP_LABEL,
      zIndex: 1000,
    });
    if (!infoWindowRef.current) {
      infoWindowRef.current = new google.maps.InfoWindow();
    }
    communityMarkerRef.current.addListener("click", () => {
      const directionsUrl = buildDirectionsUrl(
        position.lat,
        position.lng,
        COMMUNITY_MAP_LABEL
      );
      infoWindowRef.current?.setContent(
        buildInfoWindowElement(
          COMMUNITY_MAP_LABEL,
          "2290 Beauty Vista Avenue, North Las Vegas, NV 89086",
          directionsUrl
        )
      );
      infoWindowRef.current?.open({ map, anchor: communityMarkerRef.current! });
    });
  }, []);

  const renderPlaceMarkers = useCallback(
    (map: google.maps.Map, places: AmenityPlaceResult[]) => {
      clearPlaceMarkers();
      if (!infoWindowRef.current) {
        infoWindowRef.current = new google.maps.InfoWindow();
      }
      places.forEach((place) => {
        const marker = new google.maps.Marker({
          map,
          position: { lat: place.lat, lng: place.lng },
          title: place.name,
        });
        marker.addListener("click", () => {
          infoWindowRef.current?.setContent(
            buildInfoWindowElement(
              place.name,
              place.address,
              place.directionsUrl
            )
          );
          infoWindowRef.current?.open({ map, anchor: marker });
        });
        markersRef.current.push(marker);
      });
    },
    [clearPlaceMarkers]
  );

  const searchNearby = useCallback(
    async (map: google.maps.Map, categoryId: AmenityCategoryId) => {
      const category = AMENITY_CATEGORIES.find((c) => c.id === categoryId);
      if (!category) return;

      setIsSearching(true);
      setLivePlaces([]);
      clearPlaceMarkers();

      try {
        const places = await searchCategory(
          COMMUNITY_MAP_CENTER,
          categoryId,
          category.placeTypes
        );
        const mapped = mapPlacesToResults(
          places,
          categoryId,
          buildDirectionsUrl
        );
        if (mapped.length > 0) {
          setLivePlaces(mapped);
          renderPlaceMarkers(map, mapped);
        }
      } catch {
        setLivePlaces([]);
        clearPlaceMarkers();
      } finally {
        setIsSearching(false);
      }
    },
    [clearPlaceMarkers, renderPlaceMarkers]
  );

  const initMap = useCallback(async () => {
    if (!mapContainerRef.current || mapRef.current) return;

    const mapOptions: google.maps.MapOptions = {
      center: COMMUNITY_MAP_CENTER,
      zoom: 13,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
    };
    if (mapId) {
      mapOptions.mapId = mapId;
    }

    mapRef.current = new google.maps.Map(mapContainerRef.current, mapOptions);
    showCommunityMarker(mapRef.current);
    setMapReady(true);
    await searchNearby(mapRef.current, activeCategory);
  }, [activeCategory, mapId, searchNearby, showCommunityMarker]);

  useEffect(() => {
    if (!isInView || !apiKey || loadError || mapsAuthFailed) return undefined;

    let cancelled = false;
    loadGoogleMaps(apiKey)
      .then(() => {
        if (!cancelled) {
          initMap().catch(() => enterFallback());
        }
      })
      .catch(() => {
        if (!cancelled) enterFallback();
      });

    return () => {
      cancelled = true;
    };
  }, [apiKey, enterFallback, initMap, isInView, loadError]);

  useEffect(() => {
    if (!mapReady || !mapRef.current || !apiKey || loadError || mapsAuthFailed) {
      return;
    }
    searchNearby(mapRef.current, activeCategory).catch(() => {
      setLivePlaces([]);
      clearPlaceMarkers();
    });
  }, [
    activeCategory,
    apiKey,
    clearPlaceMarkers,
    loadError,
    mapReady,
    searchNearby,
  ]);

  const useFallback = !apiKey || loadError || mapsAuthFailed;

  return (
    <div ref={rootRef} className={cn("w-full", className)}>
      <div
        role="tablist"
        aria-label="Filter nearby amenities by category"
        className="flex flex-wrap gap-2 mb-4"
        id={tabsId}
      >
        {AMENITY_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            id={`${tabsId}-${cat.id}`}
            aria-selected={activeCategory === cat.id ? "true" : "false"}
            aria-controls={`${tabsId}-panel`}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "min-h-[44px] rounded-full border px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              activeCategory === cat.id
                ? "border-primary bg-primary text-white"
                : "border-gray-300 bg-white text-primary hover:bg-bg-light",
              cat.deemphasized && "opacity-80"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <p id={statusId} className="sr-only" aria-live="polite">
        {isSearching
          ? `Loading ${activeCategory} places on the map.`
          : useFallback
            ? "Showing map embed and curated place list."
            : mapReady
              ? `Showing ${livePlaces.length} ${activeCategory} results near ${COMMUNITY_MAP_LABEL}.`
              : "Map loading when visible."}
      </p>

      <div
        role="tabpanel"
        id={`${tabsId}-panel`}
        aria-labelledby={`${tabsId}-${activeCategory}`}
        className={cn(
          "relative w-full overflow-hidden rounded-lg border border-gray-200 shadow-two bg-bg-light",
          mapHeightClass
        )}
      >
        {useFallback ? (
          <iframe
            title={`Map of ${COMMUNITY_MAP_LABEL}, North Las Vegas`}
            src={COMMUNITY_MAP_EMBED_URL}
            loading={isInView ? "lazy" : "eager"}
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full"
            allowFullScreen
          />
        ) : (
          <>
            {!mapReady ? (
              <div className="absolute inset-0 flex items-center justify-center text-sm text-text-dark">
                Loading interactive map…
              </div>
            ) : null}
            <div ref={mapContainerRef} className="absolute inset-0 h-full w-full" />
          </>
        )}
      </div>

      {showStaticList ? (
        <StaticPlaceList
          category={activeCategory}
          places={
            livePlaces.length > 0
              ? livePlaces.map((p) => ({
                  name: p.name,
                  category: activeCategory,
                  address: p.address,
                  sourceUrl: "",
                  schemaType: "Place" as const,
                }))
              : curatedNearbyPlaces.filter((p) => p.category === activeCategory)
          }
        />
      ) : null}
    </div>
  );
}
