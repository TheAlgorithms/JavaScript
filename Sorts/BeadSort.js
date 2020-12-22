/**
 * Bead sort (also known as Gravity sort)
 * https://en.wikipedia.org/wiki/Bead_sort
 *
 * Does counting sort of provided array according to
 * the digit represented by exp.
 * Only works for arrays of positive integers.
 */

/**
 * Doctests
 *
 * > beadSort([-1, 5, 8, 4, 3, 19])
 * ! RangeError: Sequence must be a list of positive integers!
 * > beadSort([5, 4, 3, 2, 1])
 * [1, 2, 3, 4, 5]
 * > beadSort([7, 9, 4, 3, 5])
 * [3, 4, 5, 7, 9]
 */

function beadSort (sequence) {
  // first, let's check that our sequence consists
  // of positive integers
  if (sequence.some((integer) => integer < 0)) {
    throw RangeError('Sequence must be a list of positive integers!')
  }

  const sequenceLength = sequence.length
  const max = Math.max(...sequence)

  // set initial grid
  const grid = sequence.map(number => {
    const maxArr = new Array(max)

    for (let i = 0; i < number; i++) {
      maxArr[i] = '*'
    }

    return maxArr
  })

  // drop the beads!
  for (let col = 0; col < max; col++) {
    let beadsCount = 0

    for (let row = 0; row < sequenceLength; row++) {
      if (grid[row][col] === '*') {
        beadsCount++
      }
    }

    for (let row = sequenceLength - 1; row > -1; row--) {
      if (beadsCount) {
        grid[row][col] = '*'
        beadsCount--
      } else {
        grid[row][col] = undefined
      }
    }
  }

  // and, finally, let's turn our bead rows into their respective numbers
  const sortedSequence = grid.map((beadArray) => {
    const beadsArray = beadArray.filter(bead => bead === '*')

    return beadsArray.length
  })

  return sortedSequence
}

// implementation
console.log(beadSort([5, 4, 3, 2, 1]))
