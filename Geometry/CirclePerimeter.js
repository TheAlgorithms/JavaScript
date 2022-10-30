//  https://en.wikipedia.org/wiki/Circle rounds to 2 decimal places
const circlePerimeter = (radius) => {
  const perimeter = radius * 2 * Math.PI
  return parseFloat(perimeter.toFixed(2))
}

export { circlePerimeter }
