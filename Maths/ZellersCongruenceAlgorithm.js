// Zeller's Congruence Algorithm finds the day of the week from the Gregorian Date. Wikipedia: https://en.wikipedia.org/wiki/Zeller%27s_congruence
export const zellersCongruenceAlgorithm = (day, month, year) => {
  if (
    typeof day !== 'number' ||
    typeof month !== 'number' ||
    typeof year !== 'number'
  ) {
    throw new TypeError('Arguments are not all numbers.')
  }
  const q = day
  let m = month
  let y = year
  if (month < 3) {
    m += 12
    y -= 1
  }
  day =
    (q +
      Math.floor((26 * (m + 1)) / 10) +
      (y % 100) +
      Math.floor((y % 100) / 4) +
      Math.floor(Math.floor(y / 100) / 4) +
      5 * Math.floor(y / 100)) %
    7
  const days = [
    'Saturday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
  ]
  return days[day]
}
