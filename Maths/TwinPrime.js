function isPrime (n) {
  let prime = false

  if (n > 1) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        prime = true
        break
      }
    }
  }

  return !prime
}

function twinPrime (n) {
  const result = []
  const prime = isPrime(n)

  if (!prime) {
    return []
  }

  result.push(n)

  if (!isPrime(n + 2)) {
    return []
  }

  result.push(n + 2)

  return result
}

export { isPrime, twinPrime }
