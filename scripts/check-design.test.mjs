import assert from "node:assert/strict";
import { test } from "node:test";
import { photoProblems, placeholderProblems } from "./check-design.mjs";

const img = (id) => `<img src="/_astro/a.avif" data-photo="${id}" alt="">`;
const credit = (id) => `<li data-credit="${id}">Author</li>`;

test("a page with each photo once and credited passes", () => {
  assert.deepEqual(photoProblems(img("a") + img("b") + credit("a") + credit("b")), []);
});

test("the same photo twice on a page fails", () => {
  assert.deepEqual(photoProblems(img("a") + img("a") + credit("a")), ['photo "a" shows more than once']);
});

test("a photo without its credit fails", () => {
  assert.deepEqual(photoProblems(img("a")), ['photo "a" has no credit on the page']);
});

test("one credit line may name several photos", () => {
  assert.deepEqual(photoProblems(img("a") + img("b") + '<li data-credit="a b">Author</li>'), []);
});

test("a page without photos passes", () => {
  assert.deepEqual(photoProblems("<p>Text</p>"), []);
});

test("placeholder text in a page fails", () => {
  assert.equal(placeholderProblems("<p><strong>Sample text.</strong> Replace this file.</p>").length, 2);
  assert.equal(placeholderProblems("<p>Vzorčno besedilo.</p>").length, 1);
});

test("placeholder words inside a script or a tag don't count", () => {
  assert.deepEqual(placeholderProblems('<script type="application/ld+json">{"x":"TODO"}</script><p data-x="TBD">Text</p>'), []);
});
