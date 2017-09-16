function euclideanGCDRecursive (first, second) {
	/*
	Calculates GCD of two numbers using Euclidean Recursive Algorithm
	:param first: First number
	:param second: Second number
	:return: GCD of the numbers
	*/
	if (second === 0) {
		return first;
	} else {
		return euclideanGCDRecursive(second, (first % second));
	}
}

function euclideanGCDIterative (first, second) {
	/*
	Calculates GCD of two numbers using Euclidean Iterative Algorithm
	:param first: First number
	:param second: Second number
	:return: GCD of the numbers
	*/
	while (second !== 0) {
		var temp = second;
		second = first % second;
		first = temp;
	}
	return first;
}

function main () {
	var first = 20;
	var second = 30;
	console.log('Recursive GCD for %d and %d is %d', first, second, euclideanGCDRecursive(first, second));
	console.log('Iterative GCD for %d and %d is %d', first, second, euclideanGCDIterative(first, second));
}

main();
