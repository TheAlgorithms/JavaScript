// Returns the value of x to the power of y

const pow = (x, y) => {
  let result = 1
  if (y >= 0) {
    for (let i = 1; i <= y; i++) {
      result *= x
    }
  } else {
    for (let i = y; i < 0; i++) {
      result *= x
    }
    result = 1 / result
  }
  return result
}

export { pow }
