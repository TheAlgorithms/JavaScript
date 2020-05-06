/*
 * Shell Sort sorts an array based on  insertion sort algorithm
 * more information: https://en.wikipedia.org/wiki/Shellsort
 *
 */
function shellSort (items) {
  var interval = 1

  while (interval < items.length / 3) {
    interval = interval * 3 + 1
  }

  while (interval > 0) {
    for (var outer = interval; outer < items.length; outer++) {
      var value = items[outer]
      var inner = outer

      while (inner > interval - 1 && items[inner - interval] >= value) {
        items[inner] = items[inner - interval]
        inner = inner - interval
      }
      items[inner] = value
    }
    interval = (interval - 1) / 3
  }
  return items
}

// Implementation of shellSort

var ar = [5, 6, 7, 8, 1, 2, 12, 14]
// Array before Sort
console.log(ar)
shellSort(ar)
// Array after sort
console.log(ar)
