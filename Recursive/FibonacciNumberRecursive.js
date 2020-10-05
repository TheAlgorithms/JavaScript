//  https://en.wikipedia.org/wiki/Fibonacci_number

const fibonacci = (N) => {
  if (N === 0 || N === 1) return N

  return fibonacci(N - 2) + fibonacci(N - 1)
}


// testing
(() => {
  const number = 5
  console.log(number + 'th Fibonacci number is ' + fibonacci(number))
})()
