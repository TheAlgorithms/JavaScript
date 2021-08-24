/*
    DateDayDifference Method
    ------------------------
    DateDayDifference method calculates the number of days between two dates.

    Algorithm & Explanation : https://ncalculators.com/time-date/date-difference-calculator.htm
*/

// Internal method for make calculations easier
const isLeap = (year) => {
  if (year % 400 === 0) return true
  else if (year % 100 === 0) return false
  else if (year % 4 === 0) return true
  else return false
}
const DateToDay = (dd, mm, yyyy) => {
  return Math.floor((365 * (yyyy - 1)) + ((yyyy - 1) / 4) - ((yyyy - 1) / 100) + ((yyyy - 1) / 400) + dd + (((367 * mm) - 362) / 12) + (mm <= 2 ? 0 : isLeap(yyyy) ? -1 : -2))
}

const DateDayDifference = (date1, date2) => {
  // firstly, check that both input are string or not.
  if (typeof date1 !== 'string' && typeof date2 !== 'string') {
    return new TypeError('Argument is not a string.')
  }
  // extarct the first date
  const [firstDateDay, firstDateMonth, firstDateYear] = date1.split('/').map((ele) => Number(ele))
  // extarct the second date
  const [secondDateDay, secondDateMonth, secondDateYear] = date2.split('/').map((ele) => Number(ele))
  // check the both data are valid or not.
  if (firstDateDay < 0 || firstDateDay > 31 ||
        firstDateMonth > 12 || firstDateMonth < 0 ||
        secondDateDay < 0 || secondDateDay > 31 ||
        secondDateMonth > 12 || secondDateMonth < 0) {
    return new TypeError('Date is not valid.')
  }
  return Math.abs(DateToDay(secondDateDay, secondDateMonth, secondDateYear) - DateToDay(firstDateDay, firstDateMonth, firstDateYear))
}

// Example : DateDayDifference('17/08/2002', '10/10/2020') => 6630

module.exports = DateDayDifference
