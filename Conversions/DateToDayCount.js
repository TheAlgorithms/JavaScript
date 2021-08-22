/*
DateToDayCount Method
---------------------
The DateToDayCount method takes a string date and tells
how many days have passed from that date to the current date.

Problem source and Explanation :
    1) http://wiki.hotdocs.com/index.php?title=Determine_Number_of_Days_Between_Two_Dates
    2) https://wiki.scn.sap.com/wiki/display/Snippets/calculate+no+of+working+days+between+two+dates
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

const DateToDayCount = (date) => {
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
  const baseDate = `${monthsNameList[month]} ${day}, ${year} 24:00:00`
  // use the Date class and make an object use of the base date.
  const inputDate = new Date(baseDate)
  // get the current date.
  const currentDate = new Date()
  // make some celculation for retrive the result.
  const diffTime = Math.abs(currentDate - inputDate)
  // convert time to day count.
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
}

module.exports = DateToDayCount
