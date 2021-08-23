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

    Algorithm & Explanation : https://cs.uwaterloo.ca/~alopez-o/math-faq/node73.html
*/

// March is taken as the first month of the year.
const calcMonthList = {
    1: 11,
    2: 12,
    3: 1,
    4: 2,
    5: 3,
    6: 4,
    7: 5,
    8: 6,
    9: 7,
    10: 8,
    11: 9,
    12: 10
}

// show the week day in a number : Sunday - Saturday => 0 - 6
const daysNameList = { // weeks-day
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
}

const DateToDay = (date) => {
  // firstly, check that input is a string or not.
  if (typeof date !== 'string') {
    return new TypeError('Argument is not a string.')
  }
  // extarct the date
  const [day, month, year] = date.split('/').map((x) => Number(x))
  // check the data are valid or not.
  if ( day < 0 || day > 31 || month > 12 || month < 0) {
    return new TypeError('Date is not valid.')
  }
  // divide year to century and yearDigit value.
  const yearDigit = (year % 100)
  const century = Math.floor(year / 100)
  // Apply the algorithm shown above
  const weekDay = Math.abs((day + Math.floor((2.6 * calcMonthList[month]) - 0.2) - (2 * century) + yearDigit + Math.floor(yearDigit/4) + Math.floor(century/4)) % 7)
  // return the weekDay name.
  return daysNameList[weekDay];
}

// Example : DateToDay("18/12/2020") => Friday

module.exports = DateToDay
