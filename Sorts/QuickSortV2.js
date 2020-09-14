// Easy to Understand QuickSort implementation
// For more information see here: https://en.wikipedia.org/wiki/Quicksort

function quickSort(array) {
	if (array.length <= 1) return array;

	let smaller = [];
	let bigger = [];
	let pivot = array[0];

	for (let i = 1; i < array.length; i++) {
		array[i] <= pivot ? smaller.push(array[i]) : bigger.push(array[i]);
	}

	return [...quickSort(smaller), pivot, ...quickSort(bigger)];
}

const arr = [10, 30, 60, 70, 20, 40, 50]

console.log(quickSort(arr)); // [ 10, 20, 30, 40, 50, 60, 70 ]
