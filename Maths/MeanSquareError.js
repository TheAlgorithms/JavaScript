// Wikipedia: https://en.wikipedia.org/wiki/Mean_squared_error

const meanSquaredError = (predicted, expected) => {
  if (!Array.isArray(predicted) || !Array.isArray(expected)) {
    throw new TypeError('Argument must be an Array')
  }

  if (predicted.length !== expected.length) {
    throw new TypeError('The two lists must be of equal length')
  }

  let err = 0

  for (let i = 0; i < expected.length; i++) {
    err += (expected[i] - predicted[i]) ** 2
  }

  return err / expected.length
}

export { meanSquaredError }
