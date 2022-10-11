/**
 * @function sumUsingLoop
 * @description sum a list of numbers using for loop and return
 * @param {Integer array} params
 * @returns  {Integer} sum
 * @example sumUsingLoop([1,4,5,-3]) = 7
 */
function sumUsingLoop (params) {
  if (!Array.isArray(params)) {
    throw new TypeError('Invalid Input')
  }
  let sum = 0
  for (const element of params) {
    sum += element
  }
  return sum
}
/**
 * @function sumUsingReduce
 * @description sum a list of numbers using reduce function and return
 * @param {Integer array} params
 * @returns  {Integer} sum
 * @example sumUsingReduce([1,4,5,-3]) = 7
 */
function sumUsingReduce (params) {
  if (!Array.isArray(params)) {
    throw new TypeError('Invalid Input')
  }
  return params.reduce((partialSum, value) => partialSum + value)
}

export {
  sumUsingLoop,
  sumUsingReduce
}
