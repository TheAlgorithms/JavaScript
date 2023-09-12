/*
    author: @dev-madhurendra

    This script will check whether the given
    number is a power of four or not.

    A number will be power of four if and only if there is a 1 in the binary
    of the digit and it will be at the first position and followed by even number of zeroes are there.

    n   n-1%3==0   (n-1)'sbin  (n)'sbin
    1   0           0           1        - 4^0
    4   3           011         100      - 4^1
    16  15          01111       10000    - 4^2
    64  63          011111      1000000  - 4^3

*/

const IsPowerOfFour = (n) => ((n > 0) && ((n & n - 1) === 0) && (n % 3 === 1))

export { IsPowerOfFour }
