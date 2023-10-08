/**
 * BucketSort implementation.
 *
 * Wikipedia says: Bucket sort, or bin sort, is a sorting algorithm that works by distributing the elements of an array
 * into a number of buckets. Each bucket is then sorted individually, either using a different sorting algorithm, or by
 * recursively applying the bucket sorting algorithm. It is a distribution sort, and is a cousin of radix sort in the
 * most to least significant digit flavour. Bucket sort is a generalization of pigeonhole sort. Bucket sort can be
 * implemented with comparisons and therefore can also be considered a comparison sort algorithm. The computational
 * complexity estimates involve the number of buckets.
 *
 * @see https://en.wikipedia.org/wiki/Bucket_sort#:~:text=Bucket%20sort%2C%20or%20bin%20sort,applying%20the%20bucket%20sorting%20algorithm.&text=Sort%20each%20non%2Dempty%20bucket.
 *
 * Time Complexity of Solution:
 * Best Case O(n); Average Case O(n); Worst Case O(n)
 *
 * @param {number[]} list The array of numbers to be sorted.
 * @param {number} size The size of the buckets used. If not provided, size will be 5.
 * @return {number[]} An array of numbers sorted in increasing order.
 */
export function bucketSort(list, size) {
  if (undefined === size) {
    size = 5
  }
  if (list.length === 0) {
    return list
  }
  let min = list[0]
  let max = list[0]
  // find min and max
  for (let iList = 0; iList < list.length; iList++) {
    if (list[iList] < min) {
      min = list[iList]
    } else if (list[iList] > max) {
      max = list[iList]
    }
  }
  // how many buckets we need
  const count = Math.floor((max - min) / size) + 1

  // create buckets
  const buckets = []
  for (let iCount = 0; iCount < count; iCount++) {
    buckets.push([])
  }

  // bucket fill
  for (let iBucket = 0; iBucket < list.length; iBucket++) {
    const key = Math.floor((list[iBucket] - min) / size)
    buckets[key].push(list[iBucket])
  }
  const sorted = []
  // now sort every bucket and merge it to the sorted list
  for (let iBucket = 0; iBucket < buckets.length; iBucket++) {
    const arr = buckets[iBucket].sort((a, b) => a - b)
    for (let iSorted = 0; iSorted < arr.length; iSorted++) {
      sorted.push(arr[iSorted])
    }
  }
  return sorted
}
