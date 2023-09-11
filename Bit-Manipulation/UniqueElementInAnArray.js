/*
  Problem Statement :

    author : @dev-madhurendra

    a) This algo works when interviewer asks if the all the element is repeating
       twice except one element.

    Explanation :
      [1,2,1,2,3]
      a) Basic thing is a^a (a xor a) = 0
      b) So if we do like
         1^2^1^2^3 => (1^1)^(2^2)^3 => 0^0^3 => 3
*/

const UniqueElementInAnArray = (arr) => arr.reduce((acc, val) => acc ^ val, 0)

export { UniqueElementInAnArray }
