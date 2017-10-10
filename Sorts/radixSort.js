/*
* Radix sorts an integer array without comparing the integers.
* It groups the integers by their digits which share the same
* significant position.
* For more information see: https://en.wikipedia.org/wiki/Radix_sort
*/
function radixSort(items, RADIX) {

  //default radix is then because we usually count to base 10
  if (RADIX === undefined || RADIX < 1) {
    RADIX = 10;
  }

  var maxLength = false;
  var placement = 1;

  while (!maxLength) {
    maxLength = true;
    var buckets = [];

    for (var i = 0; i < RADIX; i++) {
      buckets.push([]);
    }

    for (var j = 0; j < items.length; j++) {
      var tmp = items[j] / placement;
      buckets[Math.floor(tmp % RADIX)].push(items[j]);
      if (maxLength && tmp > 0) {
        maxLength = false;
      }
    }

    var a = 0;
    for (var b = 0; b < RADIX; b++) {
      var buck = buckets[b];
      for (var k = 0; k < buck.length; k++) {
        items[a] = buck[k];
        a++;
      }
    }
    placement *= RADIX;
  }
  return items;
}

//Implementation of radixSort

var ar = [5, 6, 7, 8, 1, 2, 12, 14];
//Array before Sort
console.log(ar);
radixSort(ar);
//Array after sort
console.log(ar);
