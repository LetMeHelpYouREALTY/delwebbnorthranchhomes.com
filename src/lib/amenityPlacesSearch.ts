import type { AmenityCategoryId } from "./communityMapConfig";

export type AmenityPlaceResult = {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  directionsUrl: string;
};

const cache = new Map<string, Promise<google.maps.places.Place[]>>();

export function searchCategory(
  center: google.maps.LatLngLiteral,
  categoryId: AmenityCategoryId,
  types: string[]
): Promise<google.maps.places.Place[]> {
  let p = cache.get(categoryId);
  if (!p) {
    p = (async () => {
      const { Place } = (await google.maps.importLibrary(
        "places"
      )) as google.maps.PlacesLibrary;
      const { places } = await Place.searchNearby({
        fields: ["displayName", "location", "formattedAddress", "googleMapsURI"],
        locationRestriction: { center, radius: 5000 },
        includedPrimaryTypes: types,
        maxResultCount: 10,
        rankPreference: "POPULARITY" as any,
      });
      return places;
    })();
    p.catch(() => cache.delete(categoryId));
    cache.set(categoryId, p);
  }
  return p;
}

export function mapPlacesToResults(
  places: google.maps.places.Place[],
  categoryId: AmenityCategoryId,
  buildDirectionsUrl: (lat: number, lng: number, name?: string) => string
): AmenityPlaceResult[] {
  return places
    .map((place, index) => {
      const loc = place.location;
      if (!loc) return null;
      const { lat, lng } = loc.toJSON();
      const displayName = place.displayName;
      let name = "Nearby place";
      if (displayName !== null && displayName !== undefined) {
        if (typeof displayName === "object" && displayName && "text" in displayName) {
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
        directionsUrl:
          place.googleMapsURI ?? buildDirectionsUrl(lat, lng, name),
      };
    })
    .filter((p): p is AmenityPlaceResult => p != null);
}
