/**
 * @function SimpleInterest
 * @description to calculate the amount of interest charged on a sum at a given rate and for a given period of time
 * @param {number} principal - input: the principal amount
 * @param {number} interestRate - input: the rate of interest in percentage
 * @param {number} time - input: the time period in year
 * @return {number} simpleInterest
 */

const SimpleInterest = (principal, interestRate, time) => {
  const simpleInterest = Math.floor((principal * interestRate * time) / 100)
  return simpleInterest
}

export { SimpleInterest }
