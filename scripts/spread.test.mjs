import assert from "node:assert/strict";
import { test } from "node:test";
import { spread } from "../src/lib/spread.mjs";

const space = { gap: 64, width: 1000, height: 600, margin: 32 };
const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

test("markers far apart stay on their points", () => {
  const points = [
    { x: 100, y: 100 },
    { x: 400, y: 300 },
  ];
  assert.deepEqual(spread(points, space), points);
});

test("a marker that would cover another moves until it doesn't", () => {
  const points = [
    { x: 500, y: 300 },
    { x: 502, y: 301 },
    { x: 530, y: 290 },
  ];
  const placed = spread(points, space);
  assert.deepEqual(placed[0], points[0]);
  for (let i = 0; i < placed.length; i++) {
    for (let j = i + 1; j < placed.length; j++) {
      assert.ok(distance(placed[i], placed[j]) >= space.gap, `${i} and ${j} overlap`);
    }
  }
});

test("markers stay inside the map", () => {
  const placed = spread(
    [
      { x: 5, y: 5 },
      { x: 990, y: 598 },
    ],
    space,
  );
  for (const p of placed) {
    assert.ok(p.x >= space.margin && p.x <= space.width - space.margin);
    assert.ok(p.y >= space.margin && p.y <= space.height - space.margin);
  }
});

test("a marker keeps off an obstacle, such as a village name", () => {
  const name = { x: 480, y: 280, width: 120, height: 40 };
  const [spot] = spread([{ x: 500, y: 300 }], { ...space, obstacles: [name] });
  const dx = Math.max(name.x - spot.x, 0, spot.x - name.x - name.width);
  const dy = Math.max(name.y - spot.y, 0, spot.y - name.y - name.height);
  assert.ok(Math.hypot(dx, dy) >= space.margin);
});
