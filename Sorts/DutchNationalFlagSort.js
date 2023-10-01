/**
 * @function dutchNationalFlagSort
 * @description Dutch National Flag Sort is an algorithm to sort an array containing 0s, 1s, and 2s in linear time.
    Time complexity of Dutch National Flag Sort Algorithm is O(n).
    Auxiliary Space required for Dutch National Flag Sort Algorithm is O(1).
 * @param {Integer[]} nums - Array of integers containing 0s, 1s, and 2s.
 * @return {Integer[]} - Array of integers sorted in non-decreasing order.
 * @see [Dutch National Flag Sort](https://en.wikipedia.org/wiki/Dutch_national_flag_problem)
 */
export function dutchNationalFlagSort(nums) {
  let low = 0
  let mid = 0
  let high = nums.length - 1

  while (mid <= high) {
    switch (nums[mid]) {
      case 0:
        ;[nums[low], nums[mid]] = [nums[mid], nums[low]]
        low++
        mid++
        break
      case 1:
        mid++
        break
      case 2:
        ;[nums[mid], nums[high]] = [nums[high], nums[mid]]
        high--
        break
    }
  }

  return nums
}
