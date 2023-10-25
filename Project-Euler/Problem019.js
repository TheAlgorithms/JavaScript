// https://projecteuler.net/problem=19

export const countSundays = (startYear = 1901, endYear = 2000) => {
  let n = 0,
    dayOfWeek = 2
  const months = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  for (let year = startYear; year <= endYear; year++) {
    months[1] = 28 + ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)

    for (const month of months) {
      dayOfWeek += month % 7
      if (dayOfWeek % 7 === 0) {
        n++
      }
    }
  }
  return n
}
