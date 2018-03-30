/*
* Build a max heap out of the array. A heap is a specialized tree like
* data structure that satisfies the heap property. The heap property
* for max heap is the following: "if P is a parent node of C, then the
* key (the value) of node P is greater than the key of node C"
* Source: https://en.wikipedia.org/wiki/Heap_(data_structure)
*/
Array.prototype.heapify = function (index, heapSize) {

  let largest = index;
  let leftIndex = 2 * index + 1;
  let rightIndex = 2 * index + 2;

  if (leftIndex < heapSize && this[leftIndex] > this[largest]) {
    largest = leftIndex;
  }

  if (rightIndex < heapSize && this[rightIndex] > this[largest]) {
    largest = rightIndex;
  }

  if (largest !== index) {
    let temp = this[largest];
    this[largest] = this[index];
    this[index] = temp;

    this.heapify(largest, heapSize);
  }
};

/*
* Heap sort sorts an array by building a heap from the array and
* utilizing the heap property.
* For more information see: https://en.wikipedia.org/wiki/Heapsort
*/
function heapSort(items) {

 let length = items.length;

  for (let i = Math.floor(length / 2) - 1; i > -1; i--) {
    items.heapify(i, length);
  }
  for (let j = length -1; j > 0; j--) {
    let tmp = items[0];
    items[0] = items[j];
    items[j] = tmp;
    items.heapify(0, j);
  }
  return items;
}

//Implementation of heapSort

var ar = [5, 6, 7, 8, 1, 2, 12, 14];
//Array before Sort
console.log(ar);
heapSort(ar);
//Array after sort
console.log(ar);
