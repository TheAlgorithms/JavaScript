function towerOfHanoi(n, source, destination, auxiliary) {
  let moves = [] // will store all moves as [from, to]

  // Recursive helper function
  function solve(disks, fromRod, toRod, auxRod) {
    // Base case: Only one disk left
    if (disks === 1) {
      moves.push([fromRod, toRod])
      return
    }

    // Move n-1 disks from source to auxiliary
    solve(disks - 1, fromRod, auxRod, toRod)

    // Move the largest disk from source to destination
    moves.push([fromRod, toRod])

    // Move n-1 disks from auxiliary to destination
    solve(disks - 1, auxRod, toRod, fromRod)
  }

  solve(n, source, destination, auxiliary)

  return moves
}

export { towerOfHanoi }
