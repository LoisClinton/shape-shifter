/**
 * Uses the Shoelace Algorithm (https://vimeo.com/429687542) to find the area of a triangle given the coordinates of the three corners.
 * The triangle is not assumed to be a right-triangle. The points are given in an array, e.g.
 * [{ x: 3, y: 4}, { x: 4, y: 6 }, { x: 7, y: 1 }]
 * @param {{ x: number, y: number }[]} points - The three vertices of the triangle
 * @returns
 */

// 1/2 ((x1*y2) + (x2*y3) + (x3*y1)) -(x2*y1) +(x3*y2)* (x1*y3)

function triangleAreaFromCoords(points) {
  // points[][0] = x
  // points[][1] = y

  // 1/2 ((x0*y1) + (x1*y2) + (x2*y0)) -(x1*y0) +(x2*y1)* (x0*y2) 'y'
  const x0 = points[0]["x"];
  const x1 = points[1]["x"];
  const x2 = points[2]["x"];
  const y0 = points[0]["y"];
  const y1 = points[1]["y"];
  const y2 = points[2]["y"];

  const a = x0 * y1;
  const b = x1 * y2;
  const c = x2 * y0;

  const d = x1 * y0;
  const e = x2 * y1;
  const f = x0 * y2;

  console.log(a, b, c, d, e, f);

  const magnitude = a + b + c - (d + e + f);

  result = magnitude * 0.5;

  console.log(magnitude);
  return result;
}
console.log(
  triangleAreaFromCoords([
    { x: 1, y: 5 },
    { x: 4, y: 2 },
    { x: 5, y: 3 },
  ])
);

module.exports = triangleAreaFromCoords;
