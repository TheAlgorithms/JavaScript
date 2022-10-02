/**
 * [Majority Element](https://www.geeksforgeeks.org/majority-element/) A majority element in an array A[] of size n is an element that appears more than n/2 times (and hence there is at most one such element)
 * @complexity: O(n) (on average )
 * @complexity: O(n) (worst case)
 * @flow
 */

// To find the candidate for majority element
function Candidate (array) {
  let indexMajority = 0
  let count = 1
  const size = array.length
  for (let i = 1; i < size; i++) {
    if (array[indexMajority] === array[i]) {
      count += 1
    } else {
      count -= 1
      if (count === 0) {
        indexMajority = i
        count = 1
      }
    }
  }
  return array[indexMajority]
}

//  verifies if candidate occures more than two times in an array
function isMajority (array, candidate) {
  let count = 0
  const size = array.length
  for (let i = 0; i < size; i++) {
    if (array[i] === candidate) {
      count += 1
    }
    if (count > size / 2) {
      return 1
    }
  }
  return 0
}

function Majority (array) {
  //    finds the candidate for majority
  const cand = Candidate(array)
  //    checks if its is the majority element
  if (isMajority(array, cand)) {
    return cand
  } else return -1
}

const FindMajority = (array) => {
  return Majority(array)
}
export { FindMajority }
