/*
Special Pythagorean triplet

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

const isPythagoreanTriplet = (a, b, c) => Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)

export const findSpecialPythagoreanTriplet = () => {
  for (let a = 0; a < 1000; a++) {
    for (let b = a + 1; b < 1000; b++) {
      for (let c = b + 1; c < 1000; c++) {
        if (isPythagoreanTriplet(a, b, c) && a + b + c === 1000) {
          return a * b * c
        }
      }
    }
  }
}
