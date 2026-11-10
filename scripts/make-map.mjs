// Builds the data of the valley map on Visit us (src/components/ValleyMap.astro)
// from OpenStreetMap: the rivers and streams, the main roads, the coast, the
// state border and the Parenzana trail, projected and simplified into
// src/assets/map/valley.json. Run it by hand when the map should change:
//
//   node scripts/make-map.mjs                 # asks the Overpass API
//   node scripts/make-map.mjs a.json b.json   # reads saved Overpass answers
//
// The map is data, not tiles: the page draws it as inline SVG, so a visitor's
// browser never asks another server. The data is © OpenStreetMap contributors
// (ODbL); the page says so under the map.
import { readFile, writeFile } from "node:fs/promises";

/** The map's frame: from the Sečovlje salt pans to the springs below Poletiči. */
export const BOX = { west: 13.58, east: 13.875, south: 45.43, north: 45.52 };
/** SVG units per degree of latitude; the width follows from the frame. */
const SCALE = 11000;
const COS = Math.cos((((BOX.north + BOX.south) / 2) * Math.PI) / 180);
export const WIDTH = Math.round((BOX.east - BOX.west) * COS * SCALE);
export const HEIGHT = Math.round((BOX.north - BOX.south) * SCALE);

const QUERIES = [
  `[out:json][timeout:25][bbox:${BOX.south},${BOX.west},${BOX.north},${BOX.east}];
(way["waterway"="river"];way["waterway"="stream"]["name"];way["natural"="coastline"];
way["highway"~"^(motorway|trunk|primary|secondary|tertiary)$"];
way["boundary"="administrative"]["admin_level"="2"];node["place"~"^(town|village|hamlet)$"];);
out geom qt;`,
  `[out:json][timeout:25][bbox:${BOX.south},${BOX.west},${BOX.north},${BOX.east}];
(way["railway"="abandoned"];way["name"~"Parenzana"];);
out geom qt;`,
];

/** [x, y] in SVG units, rounded to one decimal. */
export function project(lat, lon) {
  const x = (lon - BOX.west) * COS * SCALE;
  const y = (BOX.north - lat) * SCALE;
  return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
}

function distanceToSegment([px, py], [ax, ay], [bx, by]) {
  const dx = bx - ax;
  const dy = by - ay;
  const length = dx * dx + dy * dy;
  const t = length ? Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / length)) : 0;
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
}

/** Douglas–Peucker: drop the points closer than `tolerance` to the line. */
export function simplify(points, tolerance) {
  if (points.length < 3) return points;
  let index = 0;
  let max = 0;
  for (let i = 1; i < points.length - 1; i++) {
    const d = distanceToSegment(points[i], points[0], points.at(-1));
    if (d > max) [index, max] = [i, d];
  }
  if (max <= tolerance) return [points[0], points.at(-1)];
  return [...simplify(points.slice(0, index + 1), tolerance).slice(0, -1), ...simplify(points.slice(index), tolerance)];
}

const MARGIN = 0.01;
const inside = ({ lat, lon }) =>
  lat > BOX.south - MARGIN && lat < BOX.north + MARGIN && lon > BOX.west - MARGIN && lon < BOX.east + MARGIN;

/** The parts of a way inside the frame, as SVG path data ("M1 2L3 4"). */
export function pathOf(geometry, tolerance) {
  const parts = [];
  let current = [];
  for (const point of geometry) {
    if (inside(point)) current.push(project(point.lat, point.lon));
    else if (current.length) {
      parts.push(current);
      current = [];
    }
  }
  if (current.length) parts.push(current);
  return parts
    .filter((part) => part.length > 1)
    .map((part) => simplify(part, tolerance).map(([x, y], i) => `${i ? "L" : "M"}${x} ${y}`).join(""))
    .join("");
}

function layer(elements, test, tolerance) {
  return elements
    .filter((element) => element.type === "way" && element.geometry && test(element.tags ?? {}))
    .map((element) => pathOf(element.geometry, tolerance))
    .filter(Boolean)
    .join("");
}

async function overpass(query) {
  const response = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded", "user-agent": "SiteMapBuild/1.0" },
    body: `data=${encodeURIComponent(query)}`,
  });
  if (!response.ok) throw new Error(`Overpass: ${response.status}`);
  return response.json();
}

async function main(files) {
  const answers = files.length
    ? await Promise.all(files.map(async (file) => JSON.parse(await readFile(file, "utf8"))))
    : await Promise.all(QUERIES.map(overpass));
  const elements = answers.flatMap((answer) => answer.elements);
  const isDragonja = (tags) => tags.waterway === "river" && /^Dragonja/.test(tags.name ?? "");
  const map = {
    width: WIDTH,
    height: HEIGHT,
    box: BOX,
    scale: SCALE,
    attribution: "© OpenStreetMap contributors",
    licence: "https://www.openstreetmap.org/copyright",
    coast: layer(elements, (tags) => tags.natural === "coastline", 3),
    border: layer(elements, (tags) => tags.boundary === "administrative" && tags.admin_level === "2", 3),
    streams: layer(elements, (tags) => tags.waterway === "stream" || (tags.waterway === "river" && !isDragonja(tags)), 3),
    river: layer(elements, isDragonja, 2),
    mainRoads: layer(elements, (tags) => /^(motorway|trunk|primary)$/.test(tags.highway ?? ""), 3),
    roads: layer(elements, (tags) => /^(secondary|tertiary)$/.test(tags.highway ?? ""), 3),
    trail: layer(elements, (tags) => /Parenzana/.test(tags.name ?? "") || (tags.railway === "abandoned" && !tags.name), 3),
  };
  await writeFile(new URL("../src/assets/map/valley.json", import.meta.url), `${JSON.stringify(map, null, 1)}\n`);
  console.log(`valley.json: ${WIDTH}×${HEIGHT}, ${JSON.stringify(map).length} bytes`);
}

if (import.meta.url === `file:///${process.argv[1].replace(/\\/g, "/").replace(/^\//, "")}`) {
  await main(process.argv.slice(2));
}
