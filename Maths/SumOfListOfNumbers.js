/**
 * @function sumUsingLoop
 * @description sum a list of numbers using for loop and return
 * @param {Integer array} params
 * @returns  {Integer} sum
 * @example sumUsingLoop([1,4,5,-3]) = 7
 */
function sumUsingLoop (params) {
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
  return params.reduce((partialSum, value) => partialSum + value)
}

export {
  sumUsingLoop,
  sumUsingReduce
}
