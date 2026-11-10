// Where things are: the attractions with a point on the map, and the villages
// the map names. Coordinates are latitude and longitude from OpenStreetMap
// (the same data as the map, scripts/make-map.mjs). An attraction that is a
// line (the river, a trail) or whose exact place has no source has no point.

export interface Point {
  lat: number;
  lon: number;
}

/** The attractions' points, by the file name of the attraction. */
export const attractionPoints: Record<string, Point> = {
  "secovlje-salina": { lat: 45.486, lon: 13.603 },
  "nova-vas": { lat: 45.4785, lon: 13.6945 },
  padna: { lat: 45.4915, lon: 13.6842 },
  "sveti-peter": { lat: 45.4669, lon: 13.6832 },
  // The confluence of the Rokava and the Dragonja.
  skrline: { lat: 45.4716, lon: 13.7509 },
  truske: { lat: 45.4946, lon: 13.8236 },
  labor: { lat: 45.4761, lon: 13.7732 },
  borst: { lat: 45.4853, lon: 13.7981 },
};

/** Villages the map names, for orientation. */
export const villages: (Point & { name: string })[] = [
  { name: "Sečovlje", lat: 45.4764, lon: 13.629 },
  { name: "Dragonja", lat: 45.4583, lon: 13.6583 },
  { name: "Krkavče", lat: 45.464, lon: 13.6927 },
  { name: "Koštabona", lat: 45.4789, lon: 13.7372 },
  { name: "Šmarje", lat: 45.5005, lon: 13.7171 },
  { name: "Brič", lat: 45.463, lon: 13.7514 },
  { name: "Sirči", lat: 45.464, lon: 13.847 },
  { name: "Kaštel", lat: 45.4436, lon: 13.6524 },
  { name: "Poletiči", lat: 45.4956, lon: 13.8639 },
];
