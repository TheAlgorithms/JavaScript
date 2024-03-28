// wiki - https://en.wikipedia.org/wiki/Tower_of_Hanoi
// Recursive Javascript function to solve tower of hanoi
/**
 * Solves the Tower of Hanoi problem recursively.
 * @param {number} n - The number of disks to move.
 * @param {string} from - The rod from which to move the disks.
 * @param {string} to - The rod to which to move the disks.
 * @param {string} aux - The auxiliary rod for moving disks.
 * @param {string[]} [output=[]] - Optional array to store the sequence of moves.
 * @returns {string[]} The sequence of moves to solve the Tower of Hanoi problem.
 */
export function TowerOfHanoi(n, from, to, aux, output = []) {
  if (n === 1) {
    output.push(`Move disk 1 from rod ${from} to rod ${to}`)
    return output
  }
  TowerOfHanoi(n - 1, from, aux, to, output)
  output.push(`Move disk ${n} from rod ${from} to rod ${to}`)
  TowerOfHanoi(n - 1, aux, to, from, output)
  return output
}

// Driver code (A, C, B are the name of rods)

// const n = 4
// TowerOfHanoi(n, 'A', 'C', 'B')
