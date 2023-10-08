// Wikipedia: https://en.wikipedia.org/wiki/Softmax_function

const Softmax = (inputs) => {
  const eulerExpOfAllInputs = inputs.map((input) => Math.exp(input))
  const sumOfEulerExpOfAllInputs = eulerExpOfAllInputs.reduce((a, b) => a + b)

  return inputs.map((input) => {
    const eulerExpInputs = Math.exp(input)
    return eulerExpInputs / sumOfEulerExpOfAllInputs
  })
}

export { Softmax }
