// From latitude and longitude to the pixels of the valley map
// (src/assets/map/valley.json, made by scripts/make-map.mjs): the same
// projection as the script, so points sit on the drawn rivers and roads.
import map from "../assets/map/valley.json";
import type { Point } from "./places";

const cos = Math.cos((((map.box.north + map.box.south) / 2) * Math.PI) / 180);

export const at = ({ lat, lon }: Point) => ({
  x: Math.round((lon - map.box.west) * cos * map.scale),
  y: Math.round((map.box.north - lat) * map.scale),
});

/**
 * A part of the map around a point, `width` × `height` map pixels, kept inside
 * the map: its viewBox, and where the point is in it, in percent.
 */
export function crop(point: Point, width: number, height: number) {
  const { x, y } = at(point);
  const left = Math.min(Math.max(x - width / 2, 0), map.width - width);
  const top = Math.min(Math.max(y - height / 2, 0), map.height - height);
  return {
    viewBox: `${Math.round(left)},${Math.round(top)},${width},${height}`,
    pin: { x: ((x - left) / width) * 100, y: ((y - top) / height) * 100 },
  };
}
