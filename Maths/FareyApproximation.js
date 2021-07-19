/*
* Reference: https://en.wikipedia.org/wiki/Farey_sequence
* Inspiration: https://www.youtube.com/watch?v=7LKy3lrkTRA
*
* Farey Approximation algorithm is an algorithm to
* approximate a reduced fraction value for a certain
* decimal number x where 0 < x < 1.
*
* The algorithm works by keeping two fractional upper and
* lower bounds which start at 0 / 1 and 1 / 1. These values
* are then used to find the "mediate" which is a value between
* the two fractions.
*
* For any two fractions a / b and c / d,
* mediate = a + c / b + d
*
* Then it is checked if the decimal is greater than or less
* than the mediate and then the lower or the upper value is
* set to be the mediate respectively.
*
* This is repeated for n times and then the mediate is
* returned.
*
* This is explained in a greater detail in the "Inspiration"
* link.
*/

function fareyApproximation (decimal, repeat = 20) {
  let a = 0; let b = 1; let c = 1; let d = 1; let numerator; let denominator

  for (let i = 0; i < repeat; i++) {
    numerator = a + c
    denominator = b + d

    if (decimal > numerator / denominator) {
      [a, b] = [numerator, denominator]
    } else {
      [c, d] = [numerator, denominator]
    }
  }

  return { numerator, denominator }
}

export { fareyApproximation }
