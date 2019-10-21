/*
  Interploation Seach is an imporvement over Binary Search when the values 
  in the sorted array are uniformly distributed. Binary Search always 
  searches the middle value of the arrays, whereas interploation search 
  checks different locations based on the value of the key being searched.
  So, if the value being searched is close to the value at last index in 
  the array, then the interploation search will start searching from the 
  right side of the array.
*/

function interpolationSearch(Array, Element) {
  let leftIndex = 0;
  let rightIndex = Array.length - 1;

  while (leftIndex <= rightIndex) {
    const rangeDelta = Array[rightIndex] - Array[leftIndex];
    const indexDelta = rightIndex - leftIndex;
    const valueDelta = Element - Array[leftIndex];

    if (valueDelta < 0) {
      return -1;
    }


    if (!rangeDelta) return Array[leftIndex] === Element ? leftIndex : -1;

    const middleIndex = leftIndex + Math.floor(valueDelta * indexDelta / rangeDelta);

    if (Array[middleIndex] === Element) return middleIndex;

    if (Array[middleIndex] < Element) leftIndex = middleIndex + 1;
    else rightIndex = middleIndex - 1;
  }

  return -1;
}

interpolationSearch([10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47],33)
