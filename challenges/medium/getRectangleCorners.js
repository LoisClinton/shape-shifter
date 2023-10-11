/**
 * Returns coordinates of the corners anti-clockwise from bottom-left (assumes base is horizontal)
 * @param {number} a - the base
 * @param {number} b - the height
 * @param {Object} point - the bottom left point
 * @param {number} point.x - the x coordinate
 * @param {number} point.y - the y coordinate
 * @returns {Object[]} the corners
 */

function getRectangleCorners(a, b, point) {
  const bottomLeft = point;
  const base = a;
  const height = b;
  const sameX = bottomLeft["x"];
  const sameY = bottomLeft["y"];
  const finalX = sameX + base;
  const finalY = sameY + height;
  console.log(bottomLeft, base, height, sameX, sameY);

  // get the bottom right point
  const point1 = {
    x: finalX,
    y: sameY,
  };

  // then the top right
  const point2 = {
    x: finalX,
    y: finalY,
  };

  // then the top left
  const point3 = {
    x: sameX,
    y: finalY,
  };

  // and return them as an array of points
  return [point, point1, point2, point3];
}
// console.log(getRectangleCorners(2, 3, { x: 0, y: 0 }));

//COMPLETE :)

module.exports = getRectangleCorners;
