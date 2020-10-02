// Implement a fuction which calculates a number raised to the power n.

var myPow = function (x, n) {
  if (n === 0) return 1

  const pow = Math.abs(n)

  const result = pow % 2 === 0 ? myPow(x * x, pow / 2) : myPow(x * x, (pow - 1) / 2) * x

  return n < 0 ? 1 / result : result
}

function main () {
  const number = 2
  const power = 5

  console.log(number + ' raised to ' + power + 'th power is ' + myPow(number, power))
};
main()
