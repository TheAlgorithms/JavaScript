/**
 * Bead Sort, also known as Gravity sort.
 *
 * This algorithm was inspired from natural phenomena and was designed keeping in mind objects (or beads) falling under
 * the influence of gravity.
 *
 * NOTE: It only works for arrays of positive integers.
 *
 * Wikipedia: https://en.wikipedia.org/wiki/Bead_sort
 */
export function beadSort(sequence) {
  /* Let's ensure our sequence has only Positive Integers */
  if (sequence.some((integer) => integer < 0)) {
    throw RangeError('Sequence must be a list of Positive integers Only!')
  }

  const sequenceLength = sequence.length
  const max = Math.max(...sequence)

  // Set initial Grid
  const grid = sequence.map((number) => {
    const maxArr = new Array(max)

    for (let i = 0; i < number; i++) {
      maxArr[i] = '*'
    }

    return maxArr
  })

  // Drop the Beads!
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

  /* Finally, let's turn our Bead rows into their Respective Numbers */
  return grid.map((beadArray) => {
    const beadsArray = beadArray.filter((bead) => bead === '*')
    return beadsArray.length
  })
}
