function quickSort(array, left, right){
  var leftIndex = partition(array, left, right);
  if (left < leftIndex - 1){
    quickSort(array, left, leftIndex-1);
  }
  if (right > leftIndex){
    quickSort(array, leftIndex, right);
  }
  return array;
}


fuction swap(array, left, right){
  var temp;
  temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;    
}


function partition(array, left, right){
  var pivotIndex = Math.floor( (left + right) / 2);
  var pivot = array[pivotIndex];
  leftIndex = left;
  rightIndex = right;
  
  while (leftIndex <= rightIndex){
    while(array[leftIndex] < pivot){
      leftIndex++;
    }
    
    while(array[rightIndex] > pivot){
      rightIndex--;
    }
    
    if (leftIndex <= rightIndex){
      swap(array, left, right);
      leftIndex++;
      rightIndex--;
    }
  }
  return leftIndex;
}

var array = [6, 9, 10, -9, 4, 89, 345, 42, 135, 328, 11, -121, 73, 208];
console.log(array)
console.log(quickSort(array));
