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

import { parseDate } from '../Timing-Functions/ParseDate'

// Array holding name of the day: Saturday - Sunday - Friday => 0 - 1 - 6
const daysNameArr = [
  'Saturday',
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday'
]

const DateToDay = (date) => {
  // firstly, check that input is a string or not.
  const dateStruct = parseDate(date)
  let year = dateStruct.year
  let month = dateStruct.month
  let day = dateStruct.day

  // In case of Jan and Feb:
  // Year: we consider it as previous year
  // e.g., 1/1/1987 here year is 1986 (-1)
  // Month: we consider value as 13 & 14 respectively
  if (month < 3) {
    year--
    month += 12
  }

  // divide year into century and the last two digits of the century
  const yearDigits = year % 100
  const century = Math.floor(year / 100)

  /*
  In mathematics, remainders of divisions are usually defined to always be positive;
  As an example, -2 mod 7 = 5.
  Many programming languages including JavaScript implement the remainder of `n % m` as `sign(n) * (abs(n) % m)`.
  This means the result has the same sign as the numerator. Here, `-2 % 7 = -1 * (2 % 7) = -2`.

  To ensure a positive numerator, the formula is adapted: `- 2 * century` is replaced with `+ 5 * century`
  which does not alter the resulting numbers mod 7 since `7 - 2 = 5`

  The following example shows the issue with modulo division:
  Without the adaption, the formula yields `weekDay = -6` for the date 2/3/2014;
  With the adaption, it yields the positive result `weekDay = 7 - 6 = 1` (Sunday), which is what we need to index the array
  */
  const weekDay =
    (day +
      Math.floor((month + 1) * 2.6) +
      yearDigits +
      Math.floor(yearDigits / 4) +
      Math.floor(century / 4) +
      5 * century) %
    7
  return daysNameArr[weekDay] // name of the weekday
}

// Example : DateToDay("18/12/2020") => Friday

export { DateToDay }
