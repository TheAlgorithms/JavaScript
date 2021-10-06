// Returns the value of x to the power of y

const pow = (x, y) => {
  let result = 1
  for (let i = 1; i <= y; i++) {
    result *= x
  }
  return result
}

export { pow }
