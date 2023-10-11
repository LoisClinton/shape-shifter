/*
 * This is intended to be a challenge for any squad who gets finished with everything else.
 * If you haven't done the other challenges, try those first!
 *
 * Imagine you have two rectangles with horizontal bases. If you draw them on the same grid,
 * they would overlap! Each rectangle is described by an array of coordinates, for example:
 * [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }]
 * Can you write a function which calculates the area of the overlap between two rectangles?
 *
 */

/**
 * Given the four corners of two rectangles, find the area of their overlap.
 * If they don't overlap, return 0.
 * @param {{x: number, y: number}[]} rectangle1 - The four corners of rectangle 1
 * @param {{x: number, y: number}[]} rectangle2 - The four corners of rectangle 2
 */

function rectangleOverlap(rectangle1, rectangle2) {
  let areaOfInner = 0;

  const r1 = rectangle1;
  const r2 = rectangle2;

  let r1maxX = undefined;
  let r1minX = undefined;

  let r2maxX = undefined;
  let r2minX = undefined;

  for (let i = 0; i < 4; i++) {
    let r1tempXVal = r1[i]["x"];
    let r2tempXVal = r2[i]["x"];

    console.log(r1[i]["x"], r2[i]["x"]);

    if (r1tempXVal >= r1maxX || r1maxX === undefined) {
      r1maxX = r1tempXVal;
    }
    if (r1tempXVal <= r1minX || r1minX == undefined) {
      r1minX = r1tempXVal;
    }
    if (r2tempXVal >= r2maxX || r2maxX == undefined) {
      r2maxX = r2tempXVal;
    }
    if (r2tempXVal <= r2minX || r2minX == undefined) {
      r2minX = r2tempXVal;
    }
  }

  let r1maxY = undefined;
  let r1minY = undefined;

  let r2maxY = undefined;
  let r2minY = undefined;

  for (let j = 0; j < 4; j++) {
    let r1tempYVal = r1[j]["y"];
    let r2tempYVal = r2[j]["y"];

    if (r1tempYVal >= r1maxY || r1maxY === undefined) {
      r1maxY = r1tempYVal;
    }
    if (r1tempYVal <= r1minY || r1minY == undefined) {
      r1minY = r1tempYVal;
    }

    if (r2tempYVal >= r2maxY || r2maxY == undefined) {
      r2maxY = r2tempYVal;
    }
    if (r2tempYVal <= r2minY || r2minY == undefined) {
      r2minY = r2tempYVal;
    }
  }

  // Rectangle 1
  console.log(
    "R1",
    "WIDTH:",
    "max",
    r1maxX,
    "min",
    r1minX,
    "HEIGHT:",
    "max",
    r1maxY,
    "min",
    r1minY
  );

  // Rectangle 2
  console.log(
    "R2",
    "WIDTH:",
    "max",
    r2maxX,
    "min",
    r2minX,
    "HEIGHT:",
    "max",
    r2maxY,
    "min",
    r2minY
  );

  // HORIZONTAL
  let widthOfInner;

  // If they dont touch at all
  if (r1maxX < r2minX || r2maxX < r1minX) {
    return areaOfInner; //can just return the final area as 0
  } else if (r1minX >= r2minX && r1maxX <= r2maxX) {
    widthOfInner = r1maxX - r1minX; // Horizontal width is the width of r1
  } else if (r2minX >= r1minX && r2maxX <= r1maxX) {
    widthOfInner = r2maxX - r2minX; // Horizontal width is the width of r2
  } else if (r1maxX < r2maxX) {
    widthOfInner = r1maxX - r2minX;
  } else {
    widthOfInner = r2maxX - r1minX;
  }

  console.log("WIDTH OF INNER:", widthOfInner);
  // VERTICAL
  let heightOfInner;
  if (r1minY >= r2minY && r1maxY <= r2maxY) {
    heightOfInner = r1maxY - r1minY; // Horizontal width is the width of r1
  } else if (r2minY >= r1minY && r2maxY <= r1maxY) {
    heightOfInner = r2maxY - r2minY; // Horizontal width is the width of r2
  } else if (r1maxY < r2maxY) {
    heightOfInner = r1maxY - r2minY;
  } else {
    heightOfInner = r2maxY - r1minY;
  }
  console.log("HEIGHT OF INNER:", heightOfInner);

  areaOfInner = widthOfInner * heightOfInner;

  return areaOfInner;
}

console.log(
  rectangleOverlap(
    [
      { x: 1, y: 1 },
      { x: 4, y: 1 },
      { x: 4, y: 5 },
      { x: 1, y: 5 },
    ],
    [
      { x: 0, y: 0 },
      { x: 2, y: 0 },
      { x: 2, y: 3 },
      { x: 0, y: 3 },
    ]
  ),
  rectangleOverlap(
    [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
    ],
    [
      { x: 2, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 3 },
      { x: 3, y: 2 },
    ]
  ),
  rectangleOverlap(
    [
      { x: 0, y: 0 },
      { x: 9, y: 0 },
      { x: 9, y: 9 },
      { x: 0, y: 9 },
    ],
    [
      { x: 2, y: 2 },
      { x: 2, y: 7 },
      { x: 7, y: 2 },
      { x: 7, y: 7 },
    ]
  )
);

module.exports = rectangleOverlap;
