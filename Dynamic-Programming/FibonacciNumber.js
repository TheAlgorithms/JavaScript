//  https://en.wikipedia.org/wiki/Fibonacci_number

var fib = function (N) {
  const memo = new Array(N + 1)
  memo[0] = 0
  memo[1] = 1
  for (let i = 2; i <= N; i++) {
    memo[i] = memo[i - 1] + memo[i - 2]
  }
  return memo[N]
}

fib(5)

function main () {
  const number = 5

  console.log(number + 'th Fibonacci number is' + fib(number))
};
main()
