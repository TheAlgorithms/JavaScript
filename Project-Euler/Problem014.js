/*
Longest Collatz sequence

The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

const getCollatzSequenceLength = (num, seqLength) => {
  if (num === 1) {
    return seqLength
  } else {
    let newElement
    if (num % 2 === 0) {
      newElement = num / 2
    } else {
      newElement = (3 * num) + 1
    }
    seqLength++
    return getCollatzSequenceLength(newElement, seqLength)
  }
}

export const findLongestCollatzSequence = (limit = 1000000) => {
  let startingPointForLargestSequence = 1
  let largestSequenceLength = 1
  for (let i = 2; i < limit; i++) {
    const currentSequenceLength = getCollatzSequenceLength(i, 1)
    if (currentSequenceLength > largestSequenceLength) {
      startingPointForLargestSequence = i
      largestSequenceLength = currentSequenceLength
    }
  }
  return startingPointForLargestSequence
}
