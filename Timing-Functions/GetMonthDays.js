/**
  function that takes month number and its year and returns the number of days within it
  * @param monthNumber.
  * @param year.
  e.g.: mahfoudh.arous@gmail.com -> true
  e.g.: mahfoudh.arous.com ->false
*/

const getMonthDays = (monthNumber, year) => {
  const the31DaysMonths = [1, 3, 5, 7, 8, 10, 12]
  const the30DaysMonths = [4, 6, 9, 11]

  if (!the31DaysMonths.includes(monthNumber) && !the30DaysMonths.includes(monthNumber) &&
    (monthNumber !== 2)
  ) {
    throw new TypeError('Invalid Month Number.')
  }

  if (the31DaysMonths.includes(monthNumber)) { return 31 }

  if (the30DaysMonths.includes(monthNumber)) { return 30 }

  // Check for Leap year
  if (((year % 400) === 0) || (((year % 100) !== 0) && ((year % 4) === 0))) { return 29 }

  return 28
}

export { getMonthDays }
