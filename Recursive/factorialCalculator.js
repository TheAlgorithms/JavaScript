function factorialRecursion(n) {
    return n === 0 ? 1 : n * factorialRecursion(n - 1)
}

console.log(factorialRecursion(4));
console.log(factorialRecursion(15));
console.log(factorialRecursion(0));