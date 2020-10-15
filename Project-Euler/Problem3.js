function getPrime(number) {
  var factor = 2
  while (number != factor) {
    if (number % factor === 0) {
      number = number / factor
    } else {
      factor++
    }
  }
  return factor
}

console.log(getPrime(600851475143))
