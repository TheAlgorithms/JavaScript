const factorialRecursion = (n) => n === 0 ? 1 : n * factorialRecursion(n - 1);

//num can be anything you'd like
const num = 3;
console.log(factorialRecursion(num));
