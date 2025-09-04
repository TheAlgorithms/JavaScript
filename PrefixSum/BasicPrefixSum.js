function prefixSum(arr) {
  if (!Array.isArray(arr) || arr.some((num) => typeof num !== 'number')) {
    throw new TypeError(`Input must be an array of numbers`)
  }

  const pSum = []

  let sum = 0

  for (const num of arr) {
    sum += num
    pSum.push(sum)
  }

  return pSum
}

export { prefixSum }
