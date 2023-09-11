// https://en.wikipedia.org/wiki/Fibonacci_sequence

/*
    Nth Fibonacci Number :
        Fn = (((1+sqrt(5))^n) - ((1-sqrt(5))^n))/(2^n)*sqrt(5)
    
    Complexities : 
        TC - O(1)
        SC - O(1)
*/
const FibonacciUsingFormula = (n) => {
    const sqrt5 = Math.sqrt(5);
    const phi = (1 + sqrt5) / 2;
    const psi = (1 - sqrt5) / 2;
    const result = (Math.pow(phi, n) - Math.pow(psi, n)) / sqrt5;
    return Math.round(result);
}

export { FibonacciUsingFormula };