/**
 * Problem 35 - Circular primes
 *
 * @see {@link https://projecteuler.net/problem=35}
 *
 * The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.
 * There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.
 * How many circular primes are there below one million?
 *
 * @author ddaniel27
 */
import { sieveOfEratosthenes } from '../Maths/SieveOfEratosthenesIntArray'

function problem35 (n) {
  if (n < 2) {
    throw new Error('Invalid input')
  }
  // Get a list of primes without 0, 2, 4, 5, 6, 8; this discards the circular primes 2 & 5
  const list = sieveOfEratosthenes(n).filter(prime => !prime.toString().match(/[024568]/))

  const result = list.filter((number, _idx, arr) => {
    const str = String(number)
    for (let i = 0; i < str.length; i++) { // Get all rotations of the number
      const rotation = str.slice(i) + str.slice(0, i)
      if (!arr.includes(Number(rotation))) { // Check if the rotation is prime
        return false
      }
    }
    return true // If all rotations are prime, then the number is circular prime
  })

  return result.length + 2 // Add 2 to the result because the circular primes 2 & 5 were discarded
}

export { problem35 }
