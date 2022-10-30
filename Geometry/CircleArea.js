// https://en.wikipedia.org/wiki/Circle rounds to 2 decimal places
const circleArea = (radius) => {
  const area = Math.pow(radius, 2) * Math.PI
  return parseFloat(area.toFixed(2))
}

export { circleArea }
