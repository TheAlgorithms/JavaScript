/**
 * @function SimpleIntrest
 * @description to calculate the amount of interest charged on a sum at a given rate and for a given period of time
 * @param {number} principal - input: the principal amount
 * @param {number} intrestRate - input: the rate of interest in percentage
 * @param {number} time - input: the time period in year
 * @return {number} simpleIntrest
 */

const SimpleIntrest = (principal, intrestRate, time) => {
  const simpleIntrest = parseInt((principal * intrestRate * time) / 100)
  return simpleIntrest
}

export { SimpleIntrest }
