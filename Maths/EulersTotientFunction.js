/*
    author sandyboypraper

    Here is the EulerTotientFunction.
    it is also represented by phi

    so EulersTotientFunction(n) (or phi(n)) is the count of numbers in {1,2,3,....,n} that are relatively
    prime to n, i.e., the numbers whose GCD (Greatest Common Divisor) with n is 1.
*/

const gcdOfTwoNumbers = (x, y) => {
  // x is smaller than y
  // let gcd of x and y is gcdXY
  // so it divides x and y completely
  // so gcdXY should also divide y%x (y = gcdXY*a and x = gcdXY*b and y%x = y - x*k so y%x = gcdXY(a - b*k))
  // and gcd(x,y) is equal to gcd(y%x , x)
  return x === 0 ? y : gcdOfTwoNumbers(y % x, x)
}

const eulersTotientFunction = (n) => {
  let countOfRelativelyPrimeNumbers = 1
  for (let iterator = 2; iterator <= n; iterator++) {
    if (gcdOfTwoNumbers(iterator, n) === 1) countOfRelativelyPrimeNumbers++
  }
  return countOfRelativelyPrimeNumbers
}

export { eulersTotientFunction }
