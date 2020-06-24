// Wikipedia: https://en.wikipedia.org/wiki/Monte_Carlo_method
// Video Explaination: https://www.youtube.com/watch?v=ELetCV_wX_c

function piEstimation (iterations = 100000) {
  let circleCounter = 0

  for (let i = 0; i < iterations; i++) {
    // generating random points and checking if it lies within a circle of radius 1
    const x = Math.random()
    const y = Math.random()
    const radius = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))

    if (radius < 1) circleCounter += 1
  }

  // fomula for pi = (ratio of number inside circle and total iteration) x 4
  const pi = (circleCounter / iterations) * 4
  return pi
}

function main () {
  console.log(piEstimation())
}

main()
