/**
 * Works out the hypotenuse of a right-triangle with two shorter sides a and b
 * using Pythagoras' Theorem (https://en.wikipedia.org/wiki/Pythagorean_theorem)
 * @param {number} a - a side length
 * @param {number} b - the other side length
 * @returns {number} the hypotenuse
 */

function triangleHypotenuse(a, b) {
  const aSquared = a * a;
  // console.log(aSquared);
  const bSquared = b * b;
  // console.log(bSquared);
  const sumAAndBSquared = aSquared + bSquared;
  // console.log(sumAAndBSquared);
  const hypotenuse = Math.sqrt(sumAAndBSquared);

  return hypotenuse;
}
console.log(triangleHypotenuse(3, 4));
module.exports = triangleHypotenuse;
