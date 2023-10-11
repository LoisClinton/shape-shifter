const rectangleArea = require("./rectangleArea");

/**
 * @param {number} a - the base
 * @param {number} b - the height
 * @returns {number} the area
 */

function triangleArea(a, b) {
  const rectangleArea = a * b;
  return rectangleArea / 2;
}

module.exports = triangleArea;
