const DateToDay = (date) => {
  // firstly, check that input is a string or not.
  if (typeof date !== 'string') {
    return new TypeError('Argument is not a string.')
  }
  // extract the date
  const [day, month, year] = date.split('/').map((x) => Number(x))
  // check the data are valid or not.
  if (day < 0 || day > 31 || month > 12 || month < 0) {
    return new TypeError('Date is not valid.')
  }

  // JS months start at 0
  return dayOfTheWeekJS(day, month - 1, year)
}
function dayOfTheWeekJS(day, month, year) {
  const DAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  const DAY_1970_01_01 = 4
  let days = day - 1
  while (month - 1 >= 0) {
    days += daysInMonthJS(month - 1, year)
    month -= 1
  }
  while (year - 1 >= 1970) {
    days += daysInYear(year - 1)
    year -= 1
  }
  return DAYS[(days + DAY_1970_01_01) % DAYS.length]
}
function daysInMonthJS(month, year) {
  const days = [
    31, // January
    28 + (isLeapYear(year) ? 1 : 0), // Feb,
    31, // March
    30, // April
    31, // May
    30, // June
    31, // July
    31, // August
    30, // September
    31, // October
    30, // November
    31 // December
  ]
  return days[month]
}
function daysInYear(year) {
  return 365 + (isLeapYear(year) ? 1 : 0)
}
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}
//console.log(DateToDay('18/12/2020'))
// Example : DateToDay("18/12/2020") => Friday

export { DateToDay }
