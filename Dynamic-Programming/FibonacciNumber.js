//https://en.wikipedia.org/wiki/Fibonacci_number

var memo = {};
var fib = function(n) {
    if (n === 0 || n === 1) {
        return n;
    } else if (memo[n]) {
            return memo[n];
    } else {
        var result = fib(n - 1) + fib(n - 2);
        memo[n] = result;
        return result;
    }
};

//To demonstrate we used 5. You can use any number.
fib(5);

