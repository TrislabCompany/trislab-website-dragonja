// Map markers that don't cover each other. Several attractions lie a few
// hundred metres apart (the falls and bridges of the upper valley), closer
// than a marker is wide. Markers are placed in the order given: each stays on
// its point when it can; otherwise it moves out in rings around the point to
// the first place where it covers no marker placed before it, no obstacle
// (the villages' dots and names) and stays inside the map. The map draws a
// line from the point to a marker that moved.

/**
 * @typedef {{ x: number; y: number }} XY
 * @typedef {{ x: number; y: number; width: number; height: number }} Box
 * @param {XY[]} points Where each marker belongs, in map pixels.
 * @param {{ gap: number; width: number; height: number; margin: number; obstacles?: Box[] }} space
 *   gap: the least distance between two markers' centres; margin: the least
 *   distance from a centre to the edge of the map, and from a centre to an
 *   obstacle.
 * @returns {XY[]} Where to draw each marker, in the same order.
 */
export function spread(points, { gap, width, height, margin, obstacles = [] }) {
  /** @type {XY[]} */
  const placed = [];
  const inside = (/** @type {XY} */ p) => p.x >= margin && p.x <= width - margin && p.y >= margin && p.y <= height - margin;
  // The distance from a point to the nearest edge of a box (0 inside it).
  const away = (/** @type {XY} */ p, /** @type {Box} */ b) =>
    Math.hypot(Math.max(b.x - p.x, 0, p.x - b.x - b.width), Math.max(b.y - p.y, 0, p.y - b.y - b.height));
  const free = (/** @type {XY} */ p) =>
    inside(p) && placed.every((q) => Math.hypot(p.x - q.x, p.y - q.y) >= gap) && obstacles.every((b) => away(p, b) >= margin);
  const clamp = (/** @type {XY} */ p) => ({
    x: Math.min(Math.max(p.x, margin), width - margin),
    y: Math.min(Math.max(p.y, margin), height - margin),
  });

  for (const point of points) {
    let spot = clamp(point);
    if (!free(spot)) {
      search: for (let ring = 1; ring <= 8; ring++) {
        const distance = gap * ring;
        // Twelve directions per ring, starting straight up, then clockwise.
        for (let step = 0; step < 12; step++) {
          const angle = -Math.PI / 2 + (step * Math.PI) / 6;
          const candidate = {
            x: Math.round(point.x + distance * Math.cos(angle)),
            y: Math.round(point.y + distance * Math.sin(angle)),
          };
          if (free(candidate)) {
            spot = candidate;
            break search;
          }
        }
      }
    }
    placed.push(spot);
  }
  return placed;
}
