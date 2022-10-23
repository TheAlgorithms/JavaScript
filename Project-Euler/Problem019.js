/*
You are given the following information, but you may prefer to do some research for yourself.

  * 1 Jan 1900 was a Monday.
  * Thirty days has September,
    April, June and November.
    All the rest have thirty-one,
    Saving February alone,
    Which has twenty-eight, rain or shine.
    And on leap years, twenty-nine.
  * A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

*/

export function countingSundays () {
  let numberOfSundays = 0
  let dow = 2

  // The number od days in each month of the year
  const months = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  for (let y = 1901; y <= 2000; y++) {
    // Calculate the number of Days in February this year
    if (y % 4 === 0) {
      if (y % 100 === 0) {
        if (y % 400 === 0) {
          // Leap Year (29 Days in February)
          months[1] = 29
        } else {
          // Not Leap Year (28 Days in February)
          months[1] = 28
        }
      } else {
        // Leap Year (29 Days in February)
        months[1] = 29
      }
    } else {
      // Not Leap Year (28 Days in February)
      months[1] = 28
    }

    for (const month of months) {
      dow = dow + (month % 7)

      if (dow % 7 === 0) {
        numberOfSundays += 1
      }
    }
  }

  return numberOfSundays
}
