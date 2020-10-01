// wiki - https://en.wikipedia.org/wiki/Tower_of_Hanoi
// Recursive Javascript function to solve tower of hanoi

function TowerOfHanoi (n, fromRod, toRod, auxRod) {
  if (n === 1) {
    console.log(`Move disk 1 from rod ${fromRod} to rod ${toRod}`)
    return
  }
  TowerOfHanoi(n - 1, fromRod, auxRod, toRod)
  console.log(`Move disk ${n} from rod ${fromRod} to rod ${toRod}`)
  TowerOfHanoi(n - 1, auxRod, toRod, fromRod)
}
// Driver code
const n = 4
TowerOfHanoi(n, 'A', 'C', 'B')
// A, C, B are the name of rods
