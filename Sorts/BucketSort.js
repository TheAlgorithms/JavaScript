/**
 * @function
 * Bucket sort, or bin sort, is a sorting algorithm that works by distributing the
 * elements of an array into a number of buckets. Each bucket is then sorted individually, either using
 * a different sorting algorithm, or by recursively applying the bucket sorting algorithm. It is a
 * distribution sort, and is a cousin of radix sort in the most to least significant digit flavour.
 * Bucket sort is a generalization of pigeonhole sort.
 * Time Complexity of Solution:
 * Best Case O(n); Average Case O(n); Worst Case O(n)
 * @param {Array} list array to be sorted
 * @see [BucketSort](https://en.wikipedia.org/wiki/Bucket_sort)
*/
function bucketSort (list) {
  let size = list.length
  if (undefined === size) {
    size = 5
  }
  if (list.length === 0) {
    return
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
    const arr = buckets[iBucket].sort()
    for (let iSorted = 0; iSorted < arr.length; iSorted++) {
      sorted.push(arr[iSorted])
    }
  }
  for (let i = 0; i < size; i++) {
    list[i] = sorted[i]
  }
}

(/**
 * @example Function to test Bucket Sort
 */
  function demo () {
    const arr = [5, 6, 7, 8, 1, 2, 12, 14]
    console.log(arr)
    bucketSort(arr)
    console.log(arr)
  })()
