// To generate Gray codes using bit manipulation in JavaScript, we can create a function that takes an integer n as input and returns an array of Gray codes up to 2^n - 1
function generateGrayCodes(n) {
  if (n <= 0) {
    return [0]
  }

  const grayCodes = [0, 1]

  for (let i = 1; i < n; i++) {
    const highestBit = 1 << i
    for (let j = grayCodes.length - 1; j >= 0; j--) {
      grayCodes.push(highestBit | grayCodes[j])
    }
  }

  return grayCodes
}

export { generateGrayCodes } // Export the function for testing
