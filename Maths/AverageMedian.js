const averageMedian = (_numbers) => {
  let numbers = [..._numbers];
  let median = 0
  const numLength = numbers.length
  numbers = numbers.sort(sortNumbers)

  if (numLength % 2 === 0) {
    median = (numbers[numLength / 2 - 1] + numbers[numLength / 2]) / 2
  } else {
    median = numbers[(numLength - 1) / 2]
  }

  return median;
}

const sortNumbers = (num1, num2) => {
  return num1 - num2
}

export { averageMedian }