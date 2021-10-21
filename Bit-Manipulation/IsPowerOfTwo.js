/*
    author: @Aayushi-Mittal

    This script will check whether the given
    number is a power of two or not.

    A number will be a power of two if only one bit is set and rest are unset.
    This is true for all the cases except 01 because (2^0 = 1) which is not a power of 2.
    For eg: 10 (2^1 = 2), 100 (2^2 = 4), 10000 (2^4 = 16)

    Reference Link: https://www.hackerearth.com/practice/notes/round-a-number-to-the-next-power-of-2/

    If we will subtract 1 from a number that is a power of 2 we will get it's 1's complement.
    And we know that 1's complement is just opp. of that number.
    So, (n & (n-1)) will be 0.

    For eg:    (1000 & (1000-1))
                1 0 0 0     // Original Number (8)
                0 1 1 1     // After Subtracting 1 (8-1 = 7)
                _______
                0 0 0 0     // will become 0

*/

export const IsPowerOfTwo = (n) => {
  if (n > 0 && (n & (n - 1)) === 0) {
    return true
  }
  return false
}
