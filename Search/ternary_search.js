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