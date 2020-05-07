/**
 * QuickSelect is an algorithm to find the kth smallest number
 *
 * Notes:
 * -QuickSelect is related to QuickSort, thus has optimal best and average
 *  case (O(n)) but unlikely poor worst case (O(n^2))
 * -This implementation uses randomly selected pivots for better performance
 *
 * @complexity: O(n) (on average )
 * @complexity: O(n^2) (worst case)
 * @flow
 */

function QuickSelect (items, kth) {
  return RandomizedSelect(items, 0, items.length - 1, kth)
}

function RandomizedSelect (
  items,
  left,
  right,
  i
) {
  if (left === right) return items[left]

  const pivotIndex = RandomizedPartition(items, left, right)
  const k = pivotIndex - left + 1

  if (i === k) return items[pivotIndex]
  if (i < k) return RandomizedSelect(items, left, pivotIndex - 1, i)

  return RandomizedSelect(items, pivotIndex + 1, right, i - k)
}

function RandomizedPartition (items, left, right) {
  const rand = getRandomInt(left, right)
  Swap(items, rand, right)
  return Partition(items, left, right)
}

function Partition (items, left, right) {
  const x = items[right]
  let pivotIndex = left - 1

  for (let j = left; j < right; j++) {
    if (items[j] <= x) {
      pivotIndex++
      Swap(items, pivotIndex, j)
    }
  }

  Swap(items, pivotIndex + 1, right)

  return pivotIndex + 1
}

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function Swap (arr, x, y) {
  const temp = arr[x]
  arr[x] = arr[y]
  arr[y] = temp
}

// testing
console.log(QuickSelect([1, 4, 2, -2, 4, 5]))
