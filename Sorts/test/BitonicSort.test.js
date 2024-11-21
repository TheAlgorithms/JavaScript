import {sort} from '../BitonicSort'

// Suppose 1 Array having elements as power of 2
	var a = [4, 16, 8, 0, 100];
	var up = 1;  //change to 0 for Descending
	sort(a, a.length, up);
	console.log("Sorted array: ");
	logArray(a);  //[0, 4, 8, 16, 100]

// Test Case 2
	var a = [-4, 32, -8, 40, 80];
	var up = 1;  //change to 0 for Descending
	sort(a, a.length, up);
	console.log("Sorted array: ");
	logArray(a); //[-8, -4, 32, 40, 80]

// Test Case 3
	var a = [24, 32, 80, 40, 16];
	var up = 0;  //change to 1 for Ascending
	sort(a, a.length, up);
	console.log("Sorted array: ");
	logArray(a); //[80, 40, 32, 24, 16]

// Test Case 4
    var a = [24, 32];
    var up = 0;  //change to 0 for Descending
    sort(a, a.length, up);
    console.log("Sorted array: ");
    logArray(a); [32, 24]

// Test Case 5
    var a = [8];
    var up = 0;  //change to 0 for Descending
    sort(a, a.length, up);
    console.log("Sorted array: ");
    logArray(a); [8]