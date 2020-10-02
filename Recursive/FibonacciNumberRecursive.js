//  https://en.wikipedia.org/wiki/Fibonacci_number

var fib = function (N) {
  if (N === 0 || N === 1) return N

  return fib(N - 2) + fib(N - 1)
}

function main () {
  const number = 5

  console.log(number + 'th Fibonacci number is' + fib(number))
};
main()
