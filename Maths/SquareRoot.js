/*
* Author: Rak Laptudirm
*
* https://en.wikipedia.org/wiki/Newton%27s_method
*
* Finding the square root of a number using Newton's method.
*/

function sqrt (num, precision = 10) {
	let sqrt = 1
	for (let i = 0; i < precision; i++) {
		sqrt -= (sqrt * sqrt - num) / (2 * sqrt)
	}
	return sqrt
}

export { sqrt }
