/*
    DateDayDifference Method
    ------------------------
    DateDayDifference method calculates the number of days between two dates.

    Algorithm & Explanation : https://ncalculators.com/time-date/date-difference-calculator.htm
*/

import { isLeapYear } from '../Maths/LeapYear'

const DateToDay = (dd, mm, yyyy) => {
  return (
    365 * (yyyy - 1) +
    Math.floor((yyyy - 1) / 4) -
    Math.floor((yyyy - 1) / 100) +
    Math.floor((yyyy - 1) / 400) +
    dd +
    Math.floor((367 * mm - 362) / 12) +
    (mm <= 2 ? 0 : isLeapYear(yyyy) ? -1 : -2)
  )
}

const CheckDayAndMonth = (inDay, inMonth) => {
  if (inDay <= 0 || inDay > 31 || inMonth <= 0 || inMonth > 12) {
    throw new TypeError('Date is not valid.')
  }
}

const DateDayDifference = (date1, date2) => {
  // firstly, check that both input are string or not.
  if (typeof date1 !== 'string' || typeof date2 !== 'string') {
    throw new TypeError('Argument is not a string.')
  }
  // extract the first date
  const [firstDateDay, firstDateMonth, firstDateYear] = date1
    .split('/')
    .map((ele) => Number(ele))
  // extract the second date
  const [secondDateDay, secondDateMonth, secondDateYear] = date2
    .split('/')
    .map((ele) => Number(ele))
  // check the both data are valid or not.
  CheckDayAndMonth(firstDateDay, firstDateMonth)
  CheckDayAndMonth(secondDateDay, secondDateMonth)

  return Math.abs(
    DateToDay(secondDateDay, secondDateMonth, secondDateYear) -
      DateToDay(firstDateDay, firstDateMonth, firstDateYear)
  )
}

// Example : DateDayDifference('17/08/2002', '10/10/2020') => 6630

export { DateDayDifference }
