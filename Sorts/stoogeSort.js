/*
 * Stooge Sort is a pretty bad sorting algorithm (even slower than Bubble Sort)
 * with a complexity of approximately O(n^2.71).
 * The recursive algroithm works after the divide and conquer principle:
 * In each recursion the first and the last element (of a subset) is swapped
 * if the first element is smaller than the last.
 * Afterwards, the function is applied again to the first 2/3 of the array,
 * to the last 2/3 and again to the first 2/3.
 */

function stoogeSort(arr, begin = 0, end = arr.length - 1) {
    if (arr[begin] > arr[end]) {
        // Swap first and last element
        [arr[begin], arr[end]] = [arr[end], arr[begin]];
    }
    if (end - begin + 1 > 2) {
        const divSize = Math.floor((end - begin + 1) / 3); 
        stoogeSort(arr, begin, end - divSize);
        stoogeSort(arr, begin + divSize, end);
        stoogeSort(arr, begin, end - divSize);
    }
}

let ar=[5,6,7,8,1,2,12,14];
console.log("-----before sorting-----")
console.log(ar);
stoogeSort(ar);
console.log("-----after sorting-----")
console.log(ar);
console.log("-----------------------")
ar=[4,7,8,9,0,2,8,4,7,1,1,3,7,8,6,5];
console.log("-----before sorting-----")
console.log(ar);
stoogeSort(ar);
console.log("-----after sorting-----")
console.log(ar);