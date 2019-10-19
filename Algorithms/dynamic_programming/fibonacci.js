// Calculates fib(n) such that fib(n) = fib(n - 1) + fib(n - 2)
// fib(0) = fib(1) = 1
// Uses a bottom up dynamic programming approach
// Solve each subproblem once, using results of previous subproblems,
// which are n-1 and n-2 for Fibonacci numbers

// Although this algorithm is linear in space and time as a function
// of the input value n, it is exponential in the size of n as
// a function of the number of input bits

function fib(n) {
    var table = [];
    table.push(1);
    table.push(1);
    for (var i = 2; i < n; ++i) {
        table.push(table[i - 1] + table[i - 2]);
    }
    console.log("Fibonacci #%d = %d", n, table[n - 1]);
}


/**
 * Computes the nth fibonacci number using constant space
 * @param {number} n the nth fibonacci number
 * @returns {BigInteger} the value of the nth fibonacci number
 */
function fib_const_space(n) {
    if(n < 1) return 0n;

    const X = [0n, 1n];
    for(let i = 1; i < n; i++) {
        const prev = X[0];
        X[0] = X[1];
        X[1] += prev;
    }
    console.log(`Fibonacci #${n} = ${X[1]}`);
    return X[1];
}

fib(1);
fib(2);
fib(200);
fib(5);
fib(10);
