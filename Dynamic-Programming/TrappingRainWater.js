/**
 * @param {number[]} height
 * @return {number}
 */

/* 42. Trapping Rain Water
https://leetcode.com/problems/trapping-rain-water/

Helpful animation of this prompt: https://youtu.be/HmBbcDiJapY?t=51

Given n non-negative integers representing an elevation map where
the width of each bar is 1, compute how much water it is able to trap
after raining.

VIEW ELEVATION MAP ON LEETCODE

Example:

Input:            [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

Plan:
iterate through and find left maxes
iterate through and find right maxes
create minheight and assign it to the min(leftmax, rightmax)
if current height(element) < minheight
  push minheight - height into water array
else
  push 0 onto water array

sum up water array and return

left maxes =      [0,0,1,1,2,2,2,2,3,3,3,3]
right maxes =     [3,3,3,3,3,3,3,2,2,2,1,0]
water contained = [0,0,1,0,1,2,1,0,0,1,0,0] -> sum = 6
*/

function trap (heights) {
  const maxes = new Array(heights.length).fill(0)

  let leftMax = 0
  for (let i = 0; i < heights.length; i++) {
    const height = heights[i]
    maxes[i] = leftMax
    leftMax = Math.max(leftMax, height)
  }

  let rightMax = 0
  for (let i = heights.length - 1; i >= 0; i -= 1) {
    const height = heights[i]
    const minHeight = Math.min(rightMax, maxes[i])

    if (height < minHeight) {
      maxes[i] = minHeight - height
    } else {
      maxes[i] = 0
    }
    rightMax = Math.max(rightMax, height)
  }
  return maxes.reduce((a, b) => a + b, 0)
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])) // -> 6
