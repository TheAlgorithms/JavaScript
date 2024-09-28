/*
    Problem statement and Explanation : https://en.wikipedia.org/wiki/Coprime_integers

    In number theory, two integers a and b are coprime, relatively prime or
    mutually prime if the only positive integer that is a divisor of both
    of them is Consequently, any prime number that divides one of a
    or b does not divide the other. This is equivalent to their greatest
    common divisor (gcd) being. One says also a is prime to b or a
    is coprime with b.
*/

import { GetEuclidGCD } from './GetEuclidGCD'

// CoPrimeCheck function return the boolean in respect of the given number is co-prime or not.
/**
 * CoPrimeCheck function return the boolean in respect of the given number is co-prime or not.
 * @param {Number} firstNumber first number for checking is prime or not.
 * @param {Number} secondNumber second number for checking is prime or not.
 * @returns return correspond boolean value, if both number are co-prime return `true`, else return `false`.
 */
const CoPrimeCheck = (firstNumber, secondNumber) => {
  /*
    This is the most efficient algorithm for checking co-primes
    if the GCD of both the numbers is 1 that means they are co-primes.
    */
  return GetEuclidGCD(firstNumber, secondNumber) === 1
}

export { CoPrimeCheck }
