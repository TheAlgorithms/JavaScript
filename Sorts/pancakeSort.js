const findMaxIndexInRange = (arr, n) => {
  let index = 0;
  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[index]) {
      index = i;
    }
  }
  return index;
};

Array.prototype.swap = function(x, y) {
  if (this == null || this.length == 0) {
    return this;
  }

  [this[x], this[y]] = [this[y], this[x]];
  return this;
};

Array.prototype.flip = function(left, right) {
  if (this == null || this.length == 0) {
    return this;
  }

  while (left <= right) {
    this.swap(left, right);
    left++;
    right--;
  }
  return this;
};

Array.prototype.pancakeSort = function() {
  if (this == null || this.length == 0) {
    return this;
  }

  for (let i = this.length - 1; i > 0; i--) {
    const maxIndex = findMaxIndexInRange(arr, i + 1);
    if (i != maxIndex) {
      this.flip(0, maxIndex);
      this.flip(0, i);
    }
  }

  return this;
};

let arr = [3, 5, 2, 1, 6, 4];
console.log(arr);
arr.pancakeSort();
console.log(arr);
