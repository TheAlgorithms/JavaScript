/*
                    DateToDay Method
                    ----------------
    The DateToDay method takes a date in string format and
    returns the name of a day. The approach behind this method
    is very simple, we first take a string date and check
    whether their date is valid or not, if the date is not valid
    then we return a type error, else we apply Zeller's congruence.
    Algorithm & Explanation : https://www.geeksforgeeks.org/zellers-congruence-find-day-date/
*/

// days in a week : Sunday - Saturday => 0 - 6
const daysNameList = [ 
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]
const DateToDay = (date) => {
  // firstly, check that input is a string or not.
  if (typeof date !== 'string') {
    return new TypeError('Argument is not a string.')
  }
  // extract the date
  let [day, month, year] = date.split('/').map((x) => Number(x))
  // check the data are valid or not.
  if (day < 0 || day > 31 || month > 12 || month < 0) {
    return new TypeError('Date is not valid.')
  }
  // count Jan & Feb as months 13 & 14 of the previous year
  if (month < 3) { year--; month += 12 }
  const century = Math.floor(year / 100)
  year %= 100
  const weekDay = (year + Math.floor(year / 4) + Math.floor(century / 4) - 2 * century + Math.floor((26 * (month + 1)) / 10) + day - 1) % 7
  return daysNameList[(weekDay + 7) % 7]
}

// Example : DateToDay("18/12/2020") => Friday

export { DateToDay }
