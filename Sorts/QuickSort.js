/*
 * Quick sort is a comparison sorting algorithm that uses a divide and conquer strategy.
 * For more information see here: https://en.wikipedia.org/wiki/Quicksort
 */
function quickSort(items) {
  var length = items.length;

  if (length <= 1) {
    return items;
  }
  var PIVOT = items[0];
  var GREATER = [];
  var LESSER = [];

  for (var i = 1; i < length; i++) {
    if (items[i] > PIVOT) {
      GREATER.push(items[i]);
    } else {
      LESSER.push(items[i]);
    }
  }

  var sorted = quickSort(LESSER);
  sorted.push(PIVOT);
  sorted = sorted.concat(quickSort(GREATER));

  return sorted;
}

// Implementation of quick sort

var ar = [0, 5, 3, 2, 2];
// Array before Sort
console.log(ar);
ar = quickSort(ar);
// Array after sort
console.log(ar);

/**
 * Implementation of Quick sort in Functional Programming.
 *
 * First off, the algorithm checks items's length.
 * Then, sorting ends up with an empty array if items don't have any values.
 *
 * Basically, this is executed in the following steps.
 * 1. Takes a first value of items.
 * 2. Takes some values that is smaller(>) than the first value.
 * 3. Takes some values that is larger(<=) than the first value.
 * 4. Gives the values the quickSort function as its argument.(Recursion)
 *
 * If the smaller-value and the larget-value both get an empty array, sorting ends.
 */
function quickSort(items) {
  if (!items.length) {
    return [];
  }
  const [x, ...rest] = items;
  const smaller = rest.filter((item) => x > item);
  const larger = rest.filter((item) => x <= item);
  return quickSort(smaller).concat([x]).concat(quickSort(larger));
}

// Sort an array having numbers
const items = [3, 5, 1, 4, 2];
// Array before Sort
console.log(quickSort(items));
const returnedItems = quickSort(items);
// Array after Sord
console.log(returnedItems);

// Sort an array having literals
const anotherItems = ["b", "z", "a", "c", "t", "o"];
console.log(quickSort(anotherItems));
