import { getMonthDays } from './GetMonthDays'

function checkDate(date) {
  if (date.day < 1 || date.day > getMonthDays(date.month, date.year)) {
    throw new Error('Invalid day value.')
  }
}

function parseDate(dateString) {
  const regex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/

  const match = dateString.match(regex)

  if (!match) {
    throw new Error("Invalid date format. Please use 'dd/mm/yyyy'.")
  }

  const res = {
    day: parseInt(match[1], 10),
    month: parseInt(match[2], 10),
    year: parseInt(match[3], 10)
  }
  checkDate(res)
  return res
}

export { parseDate }
