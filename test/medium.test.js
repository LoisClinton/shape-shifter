const getRectangleCorners = require("../challenges/medium/getRectangleCorners");
const triangleHypotenuse = require("../challenges/medium/triangleHypotenuse");
const rectangleAreaFromCoords = require("../challenges/medium/rectangleAreaFromCoords");

describe("Medium", () => {
  test("corners of 2 by 3 rectangle starting at (0,0) should be (0,0), (2,0), (2,3), (0,3)", () => {
    expect(getRectangleCorners(2, 3, { x: 0, y: 0 })).toEqual([
      { x: 0, y: 0 },
      { x: 2, y: 0 },
      { x: 2, y: 3 },
      { x: 0, y: 3 },
    ]);
  });

  test("area of rectangle (2,3), (4,3), (4,10), (2,10) should be 14", () => {
    expect(
      rectangleAreaFromCoords([
        { x: 2, y: 3 },
        { x: 4, y: 3 },
        { x: 4, y: 10 },
        { x: 2, y: 10 },
      ])
    ).toBe(14);
  });

  test("area of rectangle (2,3), (4,3), (4,10), (2,10) should not depend on order of coordinates", () => {
    expect(
      rectangleAreaFromCoords([
        { x: 2, y: 3 },
        { x: 2, y: 10 },
        { x: 4, y: 3 },
        { x: 4, y: 10 },
      ])
    ).toBe(14);
  });

  test("hypotenuse of triangle with base 3 and height 4 should be 5", () => {
    expect(triangleHypotenuse(3, 4)).toBe(5);
  });
});
