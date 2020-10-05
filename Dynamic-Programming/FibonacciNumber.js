//  https://en.wikipedia.org/wiki/Fibonacci_number

const fibonacci = (N) => {
  // creating array to store values
  const memo = new Array(N + 1)
  memo[0] = 0
  memo[1] = 1
  for (let i = 2; i <= N; i++) {
    memo[i] = memo[i - 1] + memo[i - 2]
  }
  return memo[N]
}

// testing
(() => {
  const number = 5
  console.log(number + 'th Fibonacci number is ' + fibonacci(number))
})()
