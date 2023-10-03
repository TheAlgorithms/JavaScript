// Wikipedia: https://en.wikipedia.org/wiki/Euclidean_distance

const EuclideanDistance = (vector1, vector2) => {
  let sumOfSquares = 0

  for (let i = 0; i < vector1.length; i++) {
    sumOfSquares += Math.pow(vector1[i] - vector2[i], 2)
  }

  return Math.sqrt(sumOfSquares)
}

export { EuclideanDistance }
