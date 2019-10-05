/*
 * Slow Sort is an intentionally slow sorting algorithm following
 * the multiply and surrender principle (a counter concept of
 * divide and conquer).
 * The algorithm searches for the maximum value and swaps it to the
 * end of the array. Then the same thing is done for the rest of the array.
 * Since this would not be slow enough, it uses multiply and surrender:
 * It recusively determines the maximum value of the first half and the
 * second half of the array to determine the overall maximum value.
 */

function slowSort(arr, begin = 0, end = arr.length - 1) {
    if (end <= begin) {
        return;
    }

    const halfSize = Math.floor((begin + end) / 2); 
    slowSort(arr, begin, halfSize);
    slowSort(arr, halfSize + 1, end);

    if (arr[halfSize] > arr[end]) {
        // Swap elements
        [arr[halfSize], arr[end]] = [arr[end], arr[halfSize]];
    }

    slowSort(arr, begin, end - 1);
}

let ar=[5,6,7,8,1,2,12,14];
console.log("-----before sorting-----")
console.log(ar);
slowSort(ar);
console.log("-----after sorting-----")
console.log(ar);
console.log("-----------------------")
ar=[4,7,8,9,0,2,8,4,7,1,1,3,7,8,6,5];
console.log("-----before sorting-----")
console.log(ar);
slowSort(ar);
console.log("-----after sorting-----")
console.log(ar);