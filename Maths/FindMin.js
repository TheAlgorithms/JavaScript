/**
 * @function FindMin
 * @description Function to find the minimum number given in an array of integers.
 */

const findMin = (_iterable, _selector = undefined) => {
  let min = undefined;

  const iterator = _iterable[Symbol.iterator]();
  if (!_selector) {
    let current = iterator.next();
    if(current.done)
      return undefined;
    min = current.value;

    current = iterator.next();
    while(!current.done) {
      const x = current.value;
      if(x < min)
        min = x;
      current = iterator.next();
    }
  }
  else {
    let current = iterator.next();
    if(current.done)
      return undefined;
    min = _selector(current.value);

    current = iterator.next();
    while(!current.done) {
      const x = _selector(current.value);
      if(x < min)
        min = x;
      current = iterator.next();
    }
  }
  return min;
}

export { findMin }
