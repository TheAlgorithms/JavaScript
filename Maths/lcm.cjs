function gcd(a, b) {
  while (b !== 0) {
    ;[a, b] = [b, a % b]
  }
  return a
}

function lcm(a, b) {
  if (a === 0 || b === 0) return 0
  return Math.abs(a * b) / gcd(a, b)
}

module.exports = lcm

console.log(lcm(12, 18)) // Output: 36
console.log(lcm(5, 0)) // Output: 0
console.log(lcm(7, 3)) // Output: 21
