// /map/valley.svg: the valley map as one image file, for the small maps of the
// attractions that have no photo (src/components/MiniMap.astro). Each small
// map shows a part of it with an SVG view fragment
// (valley.svg#svgView(viewBox(...))), so the browser loads the file once for
// every card on a page. The colours are attributes, not a style sheet: the
// Content-Security-Policy allows no inline styles. Same data and colours as
// the map on Visit us (src/components/ValleyMap.astro).
import type { APIRoute } from "astro";
import map from "../../assets/map/valley.json";
import { villages } from "../../lib/places";
import { at } from "../../lib/map";

const line = (d: string, stroke: string, width: number, extra = "") =>
  `<path d="${d}" fill="none" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"${extra}/>`;

const names = villages
  .map((village) => {
    const { x, y } = at(village);
    return (
      `<circle cx="${x}" cy="${y}" r="7" fill="#1c2a2e"/>` +
      `<text x="${x + 14}" y="${y - 10}" font-family="Inter, system-ui, sans-serif" font-size="34" font-weight="600" fill="#1c2a2e" stroke="#f4f1e8" stroke-width="8" paint-order="stroke">${village.name}</text>`
    );
  })
  .join("");

export const GET: APIRoute = () =>
  new Response(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${map.width} ${map.height}" width="${map.width}" height="${map.height}">` +
      `<rect width="${map.width}" height="${map.height}" fill="#f4f1e8"/>` +
      line(map.coast, "#3aa6d8", 6) +
      line(map.roads, "#d9cfbd", 4) +
      line(map.mainRoads, "#c4b59b", 7) +
      line(map.streams, "#8fc9e6", 3) +
      line(map.river, "#3aa6d8", 9) +
      line(map.border, "#8a4f7d", 4, ' stroke-dasharray="18 10 4 10"') +
      line(map.trail, "#7b6753", 5, ' stroke-dasharray="2 12"') +
      names +
      `</svg>`,
    { headers: { "Content-Type": "image/svg+xml" } },
  );
