/**
 * @function sumUsingLoop
 * @description sum a list of numbers using for loop and return
 * @param {Integer array} params
 * @returns  {Integer} sum
 * @example sumUsingLoop([1,4,5,-3]) = 7
 */
function sumUsingLoop(params) {
    var sum = 0
    for(var i =0; i<params.length; i++) {
        sum += params[i]
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
function sumUsingReduce(params) {
    const sum = params.reduce((partialSum, value) => partialSum + value);
    return sum
}

export {
    sumUsingLoop,
    sumUsingReduce
}