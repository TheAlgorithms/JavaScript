/*
 Calculate the mathematical properties involving coordinates
 Calculate the Distance Between 2 Points on a 2 Dimensional Plane
 Example: coorDistance(2,2,14,11) will return 15
 Wikipedia reference: https://en.wikipedia.org/wiki/Geographical_distance#Flat-surface_formulae
*/
const distance2points = (longitude1, latitude1, longitude2, latitude2) => {
  const width = longitude2 - longitude1
  const height = latitude2 - latitude1
  return (Math.sqrt(width * width + height * height))
}

export { distance2points }
