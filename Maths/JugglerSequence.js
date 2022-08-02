/*
 * Juggler Sequence: https://en.wikipedia.org/wiki/Juggler_sequence
 * function jugglerSequence
 * Juggler Sequence is a series of integer number in which the first term starts with a positive integer number n
 * and the remaining terms are generated from the immediate previous term using the recurrence relation
 * Produce Juggler Sequence using number n as the first term of the sequence and store in an array
 * Reference: https://www.geeksforgeeks.org/juggler-sequence/
 * jugglerSequence(3) // returns [3, 5, 11, 36, 6, 2, 1 ]
 * isCompositeNumber(9) // returns [9, 27, 140, 11, 36, 6, 2, 1]
 * isCompositeNumber(15) // returns [15, 58, 7, 18, 4, 2, 1]
 */

function jugglerSequence (n) {
  const sequence = []
  let a = n
  sequence.push(n)
  // Calculate terms until last term is not 1
  while (a !== 1) {
    let b = 0
    // Check if previous term is even or odd
    if (a % 2 === 0) {
    // calculate next term
      b = Math.floor(Math.sqrt(a))
    } else {
      // for odd previous term calculate next term
      b = Math.floor(Math.sqrt(a) * Math.sqrt(a) * Math.sqrt(a))
    }
    sequence.push(b)
    a = b
  }
  return sequence
}

export { jugglerSequence }
