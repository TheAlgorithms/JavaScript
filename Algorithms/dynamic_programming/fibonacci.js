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

fib(1);
fib(2);
fib(200);
fib(5);
fib(10);
