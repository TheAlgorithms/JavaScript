/**
 * [Majority Element](https://www.geeksforgeeks.org/majority-element/) A majority element in an array A[] of size n is an element that appears more than n/2 times (and hence there is at most one such element)
 * @complexity: O(n) (on average )
 * @complexity: O(n) (worst case)
 * @flow
 */

function findCandidate (array) {
  let indexMajority = 0
  let count = 1
  const size = array.length
  for (let i = 1; i < size; i++) {
    if (array[indexMajority] === array[i]) {
      count++
    } else {
      count--
      if (count === 0) {
        indexMajority = i
        count = 1
      }
    }
  }
  return array[indexMajority]
}

//  verifies if candidate occurs more than size/2 times in an array
function isMajorityElement (array, candidate) {
  let count = 0
  const size = array.length
  for (let i = 0; i < size; i++) {
    if (array[i] === candidate) {
      count++
      if (++count > size / 2) {
        return true
      }
    }
  }
  return false
}

function findMajority (array) {
  const cand = findCandidate(array)
  return isMajorityElement(array, cand) ? cand : -1
}

export { findMajority }
