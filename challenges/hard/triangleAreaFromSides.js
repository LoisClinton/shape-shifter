const trianglePerimeter = require("../easy/trianglePerimeter");

/**
 * Uses Heron's formula (https://en.wikipedia.org/wiki/Heron%27s_formula) to give the area of a triangle
 * with sides a,b,c. The triangle isn't assumed to be a right-triangle.
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number} the area
 */

function triangleAreaFromSides(a, b, c) {
  const s2 = a + b + c;
  const s = s2 * 0.5;
  const sMinusA = s - a;
  const sMinusB = s - b;
  const sMinusC = s - c;
  const product = s * sMinusA * sMinusB * sMinusC;
  const areaOfTri = Math.sqrt(product);
  return areaOfTri;
}

console.log(triangleAreaFromSides(8, 15, 17));
module.exports = triangleAreaFromSides;
