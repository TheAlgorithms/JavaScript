/*
                    DateToDay Method
                    ----------------
    The DateToDay method takes a date in string format and returns
    the name of a day. The approach behind this method is very
    simple, we first take a string date and check whether their date
    is valid or not, if the date is valid then we pass this date
    to the predefined date method and get the date of the day We do
    it and find the name of the day, after that give the name of
    the day to the user, if the date is wrong, then tell the user
    that the given date is not valid.
*/

const monthsNameList = { // create a monthsNameList for easy to use.
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December'
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
  if (day > 31 || month > 12) {
    return new TypeError('Date is not valid.')
  }
  // create a base date for finding the actuale date.
  const baseDate = `${monthsNameList[month]} ${day}, ${year} 23:15:30`
  // use the Date class and make an object use of the base date.
  const finalDate = new Date(baseDate)
  // call a getDay() method of Date() class.
  const finalDay = finalDate.getDay()
  // return the output.
  return daysNameList[finalDay]
}

module.exports = DateToDay
