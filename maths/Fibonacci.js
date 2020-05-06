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

// testing

console.log(FibonacciIterative(5))
// Output: [ 1, 1, 2, 3, 5 ]
console.log(FibonacciRecursive(5))
// Output: [ 1, 1, 2, 3, 5 ]

console.log(FibonacciRecursiveDP(5))
// Output: 5
