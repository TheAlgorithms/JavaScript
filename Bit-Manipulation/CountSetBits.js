
// author: Smit Gabani
// https://github.com/smitgabani

/**
 * explanation link: https://iq.opengenus.org/brian-kernighan-algorithm/
 * The below algorithm is called as Brian Kernighan's algorithm
 * @param: num takes number whose number of set bit is to be found
 * @return: the count of set bits in the binary equivalent
 * */
 function CountSetBits(num) {
	'use strict' 
	let cnt = 0;
	while(num > 0) {
		cnt++;
		// num = num & (num - 1);
		num&=(num-1);
	}
	return cnt;
}

// console.log(CountSetBits(10))
// expected output: 2

export { CountSetBits }
