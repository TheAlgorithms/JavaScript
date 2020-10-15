/**
 *
 * Project Euler 5
 *
 * 2520 is the smallest number that can be divided
 * by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number
 * that is evenly divisible by all of the numbers from 1 to 20?
 *
 */

function smallestMultiple(n) {
  let small = true
  let num = 1

  let multiples = []

  while (small) {
    for (let i = 1; i <= n; i++) {
      num % i === 0 && multiples.push(i)
    }

    if (multiples.length === n) {
      small = false
      return num
    } else {
      multiples = []
      num++
    }
  }
}

console.log(smallestMultiple(20))
