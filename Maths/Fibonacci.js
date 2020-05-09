const list = []

const FibonacciIterative = (nth) => {
  const sequence = []

  if (nth >= 1) sequence.push(1)
  if (nth >= 2) sequence.push(1)

  for (let i = 2; i < nth; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2])
  }

  return sequence
}

const FibonacciRecursive = (number) => {
  return (() => {
    switch (list.length) {
      case 0:
        list.push(1)
        return FibonacciRecursive(number)
      case 1:
        list.push(1)
        return FibonacciRecursive(number)
      case number:
        return list
      default:
        list.push(list[list.length - 1] + list[list.length - 2])
        return FibonacciRecursive(number)
    }
  })()
}

const dict = new Map()

const FibonacciRecursiveDP = (stairs) => {
  if (stairs <= 0) return 0
  if (stairs === 1) return 1

  // Memoize stair count
  if (dict.has(stairs)) return dict.get(stairs)

  const res =
    FibonacciRecursiveDP(stairs - 1) + FibonacciRecursiveDP(stairs - 2)

  dict.set(stairs, res)

  return res
}

// Algorithms
// Calculates Fibonacci(n) such that Fibonacci(n) = Fibonacci(n - 1) + Fibonacci(n - 2)
// Fibonacci(0) = Fibonacci(1) = 1
// Uses a bottom up dynamic programming approach
// Solve each sub-problem once, using results of previous sub-problems
// which are n-1 and n-2 for Fibonacci numbers
// Although this algorithm is linear in space and time as a function
// of the input value n, it is exponential in the size of n as
// a function of the number of input bits
// @Satzyakiz

const FibonacciDpWithoutRecursion = (number) => {
  const table = []
  table.push(1)
  table.push(1)
  for (var i = 2; i < number; ++i) {
    table.push(table[i - 1] + table[i - 2])
  }
  return (table)
}

// testing

console.log(FibonacciIterative(5))
// Output: [ 1, 1, 2, 3, 5 ]
console.log(FibonacciRecursive(5))
// Output: [ 1, 1, 2, 3, 5 ]

console.log(FibonacciRecursiveDP(5))
// Output: 5

console.log(FibonacciDpWithoutRecursion(5))
// Output: [ 1, 1, 2, 3, 5 ]
