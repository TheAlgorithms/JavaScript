// https://en.wikipedia.org/wiki/Sphere rounds to 2 decimal places
const sphereSurfaceArea = (radius) => {
  const area = Math.pow(radius, 2) * Math.PI * 4
  return parseFloat(area.toFixed(2))
}

export { sphereSurfaceArea }
