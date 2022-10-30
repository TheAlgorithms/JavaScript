/*  https://en.wikipedia.org/wiki/Ounce returns it up to 3 decimal places  */
const ouncesToKilograms = (oz) => {
  let res = oz * 28.3498 / 1000
  res = res.toFixed(3)
  return parseFloat(res)
}

export { ouncesToKilograms }
