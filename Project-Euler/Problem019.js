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
  let n = 0
  let dow = 2
  const months = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  for (let y = 1901; y <= 2000; y++) {
    months[1] = 28 + ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0)

    for (const month of months) {
      dow += month % 7
      if (dow % 7 === 0) {
        n++
      }
    }
  }

  return n
}
