/* Ternary Search: https://en.wikipedia.org/wiki/Ternary_search.Ternary Search is a search and divide algorithm that divides the array into three parts.It’ll search through the first part, then the third part of the array.If the target element doesn’t exist within those two sections, we check the middle section to see if the element exist.*/
function ternarySearch(givenList, left, right, absolutePrecision) {
  while (true) {
    if (Math.abs(right - left) < absolutePrecision) {
      return (left + right) / 2;
    }
    var leftThird = left + (right - left) / 3;
    var rightThird = right - (right - left) / 3;
    if (givenList[leftThird] < givenList[rightThird]) {
      left = leftThird;
    } else {
      right = rightThird;
    }
  }
}
