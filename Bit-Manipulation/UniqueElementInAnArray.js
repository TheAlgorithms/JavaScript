/*
  Problem Statement :

    author : @dev-madhurendra

    Question : https://leetcode.com/problems/unique-number-of-occurrences/

    a) This algo works if all the element is repeating
       twice except one element.

    Explanation :
      [1,2,1,2,3]
      a) Basic thing is a^a (a xor a) = 0
      b) So if we do like
         1^2^1^2^3 => (1^1)^(2^2)^3 => 0^0^3 => 3
*/

const UniqueElementInAnArray = (arr) => arr.reduce((acc, val) => acc ^ val, 0)

export { UniqueElementInAnArray }
