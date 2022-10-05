/*
                    DateToDay Method
                    ----------------
    The DateToDay method takes a date in string format and
    returns the name of a day. The approach behind this method
    is very simple, we first take a string date and check
    whether their date is valid or not, if the date is valid
    then we do this But apply the algorithm shown below. The
    algorithm shown below gives us the number of the day and
    finally converts it to the name of the day.

    Algorithm & Explanation : https://en.wikipedia.org/wiki/Zeller%27s_congruence
*/

// March is taken as the first month of the year.
const calcMonthList = {
  1: 13,
  2: 14,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  11: 11,
  12: 12
}

// show the week day in a number : Sunday - Saturday => 0 - 6
const daysNameList = { // weeks-day
  1: 'Sunday',
  2: 'Monday',
  3: 'Tuesday',
  4: 'Wednesday',
  5: 'Thursday',
  6: 'Friday',
  0: 'Saturday'
}

const DateToDay = (date) => {
  // firstly, check that input is a string or not.
  if (typeof date !== 'string') {
    return new TypeError('Argument is not a string.')
  }
  // extract the date
  let [day, month, year] = date.split('/').map((x) => Number(x))
  // check the data are valid or not.
  if (day < 1 || day > 31 || month > 12 || month < 1) {
    return new TypeError('Date is not valid.')
  }

  // In case of Jan and Feb, we consider it as previous year
  // e.g., 1/1/1987 here year is 1986 (-1)
  if (month < 3) {
    year -= 1
  }

  // divide year to century and yearDigit value.
  const yearDigit = (year % 100)
  const century = Math.floor(year / 100)
  // Apply the algorithm shown above
  const weekDay = Math.abs((day + Math.floor((calcMonthList[month] + 1) * 2.6) + yearDigit + (yearDigit / 4) + (century / 4) - (2 * century)) % 7)
  // return the weekDay name.
  return daysNameList[Math.floor(weekDay)]
}

// Example : DateToDay("18/12/2020") => Friday

export { DateToDay }
