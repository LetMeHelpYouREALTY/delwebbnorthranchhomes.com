"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  AMENITY_CATEGORIES,
  COMMUNITY_MAP_CENTER,
  COMMUNITY_MAP_EMBED_URL,
  COMMUNITY_MAP_LABEL,
  DEFAULT_AMENITY_CATEGORY,
  MAP_SEARCH_RADIUS_METERS,
  getGoogleMapsApiKey,
  getGoogleMapsMapId,
  type AmenityCategoryId,
} from "@/lib/communityMapConfig";
import {
  curatedNearbyPlaces,
  type NearbyPlaceRecord,
} from "@/lib/nearbyPlacesData";

type MapPlaceResult = {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  rating?: number;
  directionsUrl: string;
};

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
  const scriptLoadedRef = useRef(false);

  const [activeCategory, setActiveCategory] =
    useState<AmenityCategoryId>(initialCategory);
  const [isInView, setIsInView] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [livePlaces, setLivePlaces] = useState<MapPlaceResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const tabsId = useId();
  const statusId = useId();

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

  const clearMarkers = useCallback(() => {
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
      infoWindowRef.current?.setContent(
        `<div style="max-width:240px"><strong>${COMMUNITY_MAP_LABEL}</strong><br/>2290 Beauty Vista Avenue<br/>North Las Vegas, NV 89086<br/><a href="${buildDirectionsUrl(position.lat, position.lng, COMMUNITY_MAP_LABEL)}" target="_blank" rel="noopener noreferrer">Directions</a></div>`
      );
      infoWindowRef.current?.open({ map, anchor: communityMarkerRef.current! });
    });
  }, []);

  const renderPlaceMarkers = useCallback(
    (map: google.maps.Map, places: MapPlaceResult[]) => {
      clearMarkers();
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
          const ratingLine =
            place.rating != null
              ? `<br/>Rating: ${place.rating.toFixed(1)}`
              : "";
          infoWindowRef.current?.setContent(
            `<div style="max-width:260px"><strong>${place.name}</strong>${ratingLine}<br/>${place.address}<br/><a href="${place.directionsUrl}" target="_blank" rel="noopener noreferrer">Directions</a></div>`
          );
          infoWindowRef.current?.open({ map, anchor: marker });
        });
        markersRef.current.push(marker);
      });
    },
    [clearMarkers]
  );

  const searchNearby = useCallback(
    async (map: google.maps.Map, categoryId: AmenityCategoryId) => {
      const category = AMENITY_CATEGORIES.find((c) => c.id === categoryId);
      if (!category) return;

      setIsSearching(true);
      setLivePlaces([]);

      const center = new google.maps.LatLng(
        COMMUNITY_MAP_CENTER.lat,
        COMMUNITY_MAP_CENTER.lng
      );

      try {
        const placesLib = (await google.maps.importLibrary(
          "places"
        )) as google.maps.PlacesLibrary;
        const { Place } = placesLib;
        const primaryType = category.placeTypes[0];

        const request = {
          fields: [
            "displayName",
            "location",
            "formattedAddress",
            "rating",
            "googleMapsURI",
          ],
          locationRestriction: {
            center,
            radius: MAP_SEARCH_RADIUS_METERS,
          },
          includedPrimaryTypes: [primaryType],
          maxResultCount: 15,
        };

        const { places } = await Place.searchNearby(request);
        const mapped: MapPlaceResult[] = places
          .map((place, index) => {
            const loc = place.location;
            if (!loc) return null;
            const lat = loc.lat();
            const lng = loc.lng();
            const displayName = place.displayName;
            let name = "Nearby place";
            if (displayName != null) {
              if (typeof displayName === "object") {
                const withText = displayName as { text?: string };
                if (typeof withText.text === "string") {
                  name = withText.text;
                }
              } else {
                name = String(displayName);
              }
            }
            const address = place.formattedAddress ?? "";
            return {
              id: `${categoryId}-${index}-${lat}`,
              name,
              address,
              lat,
              lng,
              rating: place.rating ?? undefined,
              directionsUrl:
                place.googleMapsURI ??
                buildDirectionsUrl(lat, lng, name),
            };
          })
          .filter((p): p is NonNullable<typeof p> => p != null) as MapPlaceResult[];

        if (mapped.length > 0) {
          setLivePlaces(mapped);
          renderPlaceMarkers(map, mapped);
          setIsSearching(false);
          return;
        }
      } catch {
        // Fall through to legacy nearbySearch
      }

      try {
        const service = new google.maps.places.PlacesService(map);
        const legacyType = category.legacyType ?? "establishment";
        await new Promise<void>((resolve) => {
          service.nearbySearch(
            {
              location: center,
              radius: MAP_SEARCH_RADIUS_METERS,
              type: legacyType,
            },
            (results, status) => {
              if (
                status !== google.maps.places.PlacesServiceStatus.OK ||
                !results?.length
              ) {
                resolve();
                return;
              }
              const mapped: MapPlaceResult[] = results.slice(0, 15).map((r, i) => {
                const lat = r.geometry?.location?.lat() ?? COMMUNITY_MAP_CENTER.lat;
                const lng = r.geometry?.location?.lng() ?? COMMUNITY_MAP_CENTER.lng;
                const name = r.name ?? "Nearby place";
                return {
                  id: r.place_id ?? `legacy-${i}`,
                  name,
                  address: r.vicinity ?? "",
                  lat,
                  lng,
                  rating: r.rating,
                  directionsUrl: buildDirectionsUrl(lat, lng, name),
                };
              });
              setLivePlaces(mapped);
              renderPlaceMarkers(map, mapped);
              resolve();
            }
          );
        });
      } catch {
        setLoadError(true);
      } finally {
        setIsSearching(false);
      }
    },
    [renderPlaceMarkers]
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
    if (!isInView || !apiKey || loadError) return undefined;
    if (scriptLoadedRef.current) {
      if (mapRef.current) return undefined;
      initMap().catch(() => setLoadError(true));
      return undefined;
    }

    let cancelled = false;
    const existing = document.querySelector(
      'script[data-amenity-map-loader="true"]'
    );
    if (existing) {
      scriptLoadedRef.current = true;
      initMap().catch(() => setLoadError(true));
      return undefined;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places,marker&loading=async`;
    script.async = true;
    script.defer = true;
    script.dataset.amenityMapLoader = "true";
    script.onload = () => {
      if (cancelled) return;
      scriptLoadedRef.current = true;
      initMap().catch(() => setLoadError(true));
    };
    script.onerror = () => {
      if (!cancelled) setLoadError(true);
    };
    document.head.appendChild(script);

    return () => {
      cancelled = true;
    };
  }, [apiKey, initMap, isInView, loadError]);

  useEffect(() => {
    if (!mapReady || !mapRef.current || !apiKey || loadError) return;
    searchNearby(mapRef.current, activeCategory).catch(() => setLoadError(true));
  }, [activeCategory, apiKey, loadError, mapReady, searchNearby]);

  const useFallback = !apiKey || loadError;
  const ariaExpanded = useCallback(
    (id: AmenityCategoryId) => (activeCategory === id ? "true" : "false"),
    [activeCategory]
  );

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
            aria-selected={ariaExpanded(cat.id)}
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
                  schemaType: "Place" as const,
                }))
              : curatedNearbyPlaces.filter((p) => p.category === activeCategory)
          }
        />
      ) : null}
    </div>
  );
}
