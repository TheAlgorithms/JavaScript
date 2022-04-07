/**
 * @function FindMinIterator
 * @description Function to find the minimum number given in an array.
 */

const FindMinIterator = (_iterable, _selector = undefined) => {
  let min

  const iterator = _iterable[Symbol.iterator]()
  if (!_selector) {
    let current = iterator.next()
    if (current.done) { return undefined }
    min = current.value

    current = iterator.next()
    while (!current.done) {
      const x = current.value
      if (x < min) { min = x }
      current = iterator.next()
    }
  } else {
    let current = iterator.next()
    if (current.done) { return undefined }
    min = _selector(current.value)

    current = iterator.next()
    while (!current.done) {
      const x = _selector(current.value)
      if (x < min) { min = x }
      current = iterator.next()
    }
  }
  return min
}

export { FindMinIterator }
