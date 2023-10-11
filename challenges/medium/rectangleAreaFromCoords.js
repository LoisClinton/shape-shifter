/**
 * Find the area of a rectangle given the four corners.
 * The base of the rectangle is assumed to be horizontal.
 * Note: The corners can be given in any order.
 * @param {{ x: number, y: number }[]} points - an array of 4 points, e.g. { x: 3, y: 5 }
 * @return {number} the area
 */

//points [{ x: number, y: number }{ x: number, y: number }{ x: number, y: number }{ x: number, y: number }]
function rectangleAreaFromCoords(points) {
  let maxX = 0;
  let maxY = 0;
  let minX;
  let minY;

  for (let i = 0; i < 4; i++) {
    let xCoord = points[i]["x"];
    let yCoord = points[i]["y"];

    if (xCoord > maxX) {
      maxX = xCoord;
    }
    if (yCoord > maxY) {
      maxY = yCoord;
    }
    if (xCoord < minX || minX == undefined) {
      minX = xCoord;
    }
    if (yCoord < minY || minY == undefined) {
      minY = yCoord;
    }
  }
  // console.log(maxX, minX, maxY, minY);
  const width = maxX - minX;
  const height = maxY - minY;

  // console.log(width, height);
  return width * height;
}
// console.log(
//   rectangleAreaFromCoords([
//     { x: 2, y: 3 },
//     { x: 4, y: 3 },
//     { x: 4, y: 10 },
//     { x: 2, y: 10 },
//   ])
// );

module.exports = rectangleAreaFromCoords;
