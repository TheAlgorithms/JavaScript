/**
 * @function Josephus
 * @description recursive implementation of the Josephus function.
 * @param {Integer[]} collection - The integer array.
 * @param {Integer} - The step size.
 * @return {Integer} - The last integer in the list.
 * @see [JosephusProblem](https://en.wikipedia.org/wiki/Josephus_problem)
 * @example [1,2,3,4,5,6,7] with step 3 = 4
 */

const josephus = (collection, step) => {
  // return null for invalid steps that are less than or equal to 0
  if (step <= 0 || collection.length === 0) {
    return null
  }
  if (collection.length === 1) {
    return collection[0]
  } else {
    step = (step - 1) % collection.length
    collection.splice(step, 1)
    return josephus(collection, step + collection.length)
  }
}

export { josephus }
