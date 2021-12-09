/*
 * Median: https://en.wikipedia.org/wiki/Median
 *
 * function averageMedian
 * to find the median value of an array of numbers
 * the numbers in an array will be sorted in ascending order by the function sortNumbers
 * if the length of the array is even number, the median value will be the average of the two middle numbers
 * else if the length of the array is odd number, the median value will be the middle number in the array
 */

const toArray = (_iterable, _selector) => {
  const res = [];
  if(!_selector) {
    for (const x of _iterable)
      res.push(x);
  }
  else {
    for (const x of _iterable)
      res.push(_selector(x));
  }
  return res;
};

const averageMedian = (_arrayOrIterable, {sort, selector} = {}) => {
  let array = _arrayOrIterable;

  const isArray = Array.isArray(_arrayOrIterable);
  if(!isArray)
    array = toArray(array);

  const len = array.length;
  if (len <= 0)
    return undefined;
  if (len === 1) {
    if (selector)
      return selector(array[0]);
    return array[0];
  }

  if (len === 2) {
    const a = array[0];
    const b = array[1];
    if (selector)
      return 0.5 * (selector(a) + selector(b));
    return 0.5 * (a + b);
  }

  let data = array;
  if (sort !== false) {
    if(isArray)
      data = [...array];

    if (selector)
      data.sort((_x, _y) => selector(_x) - selector(_y));
    else
      data.sort();
  }

  if (len % 2 === 0) {
    const i = len / 2;
    const a = data[i - 1];
    const b = data[i];
    if (selector)
      return 0.5 * (selector(a) + selector(b));
    return 0.5 * (a + b);
  }

  const z = data[(len - 1) >> 1];
  if (selector)
    return selector(z);

  return z;
}

export { averageMedian }
