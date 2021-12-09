/*
    More about mean:
        https://en.wikipedia.org/wiki/Mean
*/

const mean = (_iterable, _selector = undefined) => {
  let sum = 0;
  let length = 0;
  if (!_selector) {
    for (let current of _iterable) {
      sum += current;
      length++;
    }
  }
  else {
    for (let current of _iterable) {
      sum += _selector(current);
      length++;
    }
  }
  if(length === 0)
    return undefined;
  return sum/length;
}

export {mean}