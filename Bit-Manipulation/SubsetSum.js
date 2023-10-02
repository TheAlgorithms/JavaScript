// JavaScript program to answer subset sum queries using bitset

// Maximum allowed query value
const MAXSUM = 10000;

// function to check whether a subset sum equal to n
// exists in the array or not.
function processQueries(query, nq, bit) {
	let output = "";
	for (let i = 0; i < nq; i++) {
		const x = query[i];
		if (x >= MAXSUM) {
			output += "NA, ";
			continue;
		}
		bit[x] ? output += "Yes, " : output += "No, ";
	}
	console.log(output.slice(0, -2));
}


// function to store all the subset sums in bit vector
function preprocess(bit, arr, n) {
	// set all the bits to 0
	for (let i = 0; i < MAXSUM; i++) {
		bit[i] = false;
	}
	// set the 0th bit because subset sum of 0 exists
	bit[0] = true;
	// Process all array elements one by one
	for (let i = 0; i < n; i++) {
		// Do OR of following two
		// 1) All previous sums. We keep previous value
		// of bit.
		// 2) arr[i] added to every previous sum. We
		// move all previous indexes arr[i] ahead.
		for (let j = MAXSUM - 1; j >= arr[i]; j--) {
			bit[j] = bit[j] || bit[j - arr[i]];
		}
	}
}

// Driver program
function main() {
	const arr = [3, 1, 5];
	const query = [8, 7];
	const n = arr.length;
	const nq = query.length;
	// a vector of MAXSUM number of bits
	const bit = new Array(MAXSUM);
	preprocess(bit, arr, n);
	processQueries(query, nq, bit);
}

main();
