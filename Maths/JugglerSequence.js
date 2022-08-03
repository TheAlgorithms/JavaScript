/*
 * Juggler Sequence: https://en.wikipedia.org/wiki/Juggler_sequence
 * function jugglerSequence
 * Juggler Sequence is a series of integer number in which the first term starts with a positive integer number n
 * and the remaining terms are generated from the immediate previous term using the recurrence relation
 * Produce Juggler Sequence using number n as the first term of the sequence and store in an array
 * Reference: https://www.geeksforgeeks.org/juggler-sequence/
 * jugglerSequence(3) // returns [3, 5, 11, 36, 6, 2, 1 ]
 * jugglerSequence(9) // returns [9, 27, 140, 11, 36, 6, 2, 1]
 * jugglerSequence(15) // returns [15, 58, 7, 18, 4, 2, 1]
 */

function jugglerSequence (n) {
  const sequence = []
  sequence.push(n)
  // Calculate terms until last term is not 1
  while (n !== 1) {
    n = Math.floor(n ** ((n % 2) + 0.5))
    sequence.push(n)
  }
  return sequence
}

export { jugglerSequence }
