// Returns the value of x to the power of y
// Exponentiation by squaring : https://en.wikipedia.org/wiki/Exponentiation_by_squaring

const pow = (x, y) => {
  if (y < 0) return pow(1 / x, -y)
  else if (y === 0) return 1
  else if (y === 1) return x
  else if (y % 2 === 0) return pow(x * x, y / 2)
  else if (y % 2 !== 0) return x * pow(x * x, (y - 1) / 2)
}

export { pow }
