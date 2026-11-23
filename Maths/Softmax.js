// Wikipedia: https://en.wikipedia.org/wiki/Softmax_function

const Softmax = (inputs) => {
  const maxInput = inputs.reduce((maximum, input) => Math.max(maximum, input))
  const eulerExpOfAllInputs = inputs.map((input) => Math.exp(input - maxInput))
  const sumOfEulerExpOfAllInputs = eulerExpOfAllInputs.reduce((a, b) => a + b)

  return eulerExpOfAllInputs.map((value) => value / sumOfEulerExpOfAllInputs)
}

export { Softmax }
