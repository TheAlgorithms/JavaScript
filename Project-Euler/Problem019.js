/**
 * Problem 19 - Counting Sundays
 *
 * @see {@link https://projecteuler.net/problem=19}
 *
 * You are given the following information, but you may prefer to do some research for yourself.
 * 1 Jan 1900 was a Monday.
 * Thirty days has September,
 * April, June and November.
 * All the rest have thirty-one,
 * Saving February alone,
 * Which has twenty-eight, rain or shine.
 * And on leap years, twenty-nine.
 * A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
 * How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
 *
 * @author ddaniel27
 */
import { isLeapYear } from '../Maths/LeapYear'

function problem19() {
  let sundaysCount = 0 // Count of Sundays
  let dayOfWeek = 2 // 1st Jan 1900 was a Monday, so 1st Jan 1901 was a Tuesday

  for (let year = 1901; year <= 2000; year++) {
    for (let month = 1; month <= 12; month++) {
      if (dayOfWeek === 0) {
        // If it's a Sunday (0 is Sunday, 1 is Monday, ..., 6 is Saturday)
        sundaysCount++
      }

      let daysInMonth = 31
      if (month === 4 || month === 6 || month === 9 || month === 11) {
        // April, June, September, November
        daysInMonth = 30
      } else if (month === 2) {
        // February
        daysInMonth = isLeapYear(year) ? 29 : 28
      }

      dayOfWeek = (dayOfWeek + daysInMonth) % 7 // Calculate the day of the week
    }
  }

  return sundaysCount
}

export { problem19 }
