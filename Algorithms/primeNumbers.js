function primeNumber(number) {
	let qtdDiv = 0;
	for (let i = number; i > 0; i--)
		if (number % i == 0)
			qtdDiv++;

	return qtdDiv == 2 ? "It's a Prime number!" : 'Not is a prime number!';
}

(function main() {
	console.log(primeNumber(5));
	console.log(primeNumber(6));
	console.log(primeNumber(7));
	console.log(primeNumber(8));
})();