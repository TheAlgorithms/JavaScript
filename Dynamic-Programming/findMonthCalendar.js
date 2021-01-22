/*
*  This algorithm accepts a month in the format mm/yyyy.
*  And prints out the month's calendar.
*  It uses an epoch of 1/1/1900, Monday.
*/

class Month {
  constructor () {
    this.Days = ['M', 'T', 'W', 'Th', 'F', 'S', 'Su']
    this.BDays = ['M', 'Su', 'S', 'F', 'Th', 'W', 'T']
    this.epoch = { month: 1, year: 1900 }
    this.monthDays = [31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    this.monthDaysLeap = [31, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  }

  printCal (days, startDay) {
    console.log('M   T   W   Th  F   S   Su')
    const dates = []; let i
    for (i = 1; i <= days; i++) {
      dates.push(i)
    }
    for (i = 0; i < this.Days.indexOf(startDay); i++) {
      dates.unshift(' ')
    }
    while (true) {
      let row = ''
      for (i = 0; (i < 7) && (dates.length !== 0); i++) {
        row += dates.shift()
        while ((row.length % 4) !== 0) {
          row += ' '
        }
      }
      console.log(row)
      if (dates.length === 0) break
    }
  }

  parseDate (date) {
    const dateAr = []; let block = ''; let i
    for (i = 0; i < date.length; i++) {
      if (date[i] === '/') {
        dateAr.push(parseInt(block))
        block = ''
        continue
      }
      block += date[i]
    }
    dateAr.push(parseInt(block))
    if (dateAr.length !== 2) throw new Error('Improper string encoding')
    const dateOb = { month: dateAr[0], year: dateAr[1] }
    return dateOb
  }

  isLeapYear (year) {
    if (((year % 400) === 0) || (((year % 100) !== 0) && ((year % 4) === 0))) return true
    else return false
  }

  isGreater (startDate, endDate) {
    if (startDate.year > endDate.year) { return true } else if (startDate.year < endDate.year) { return false } else if (startDate.month > endDate.month) { return true } else if (startDate.month < endDate.month) { return false } else return true
  }

  getDayDiff (startDate, endDate) {
    if (this.isGreater(startDate, endDate) === null) {
      return 0
    } else if ((this.isGreater(startDate, endDate) === true)) {
      const midDate = startDate
      startDate = endDate
      endDate = midDate
    }
    let diff = 0
    while (startDate.year !== endDate.year) {
      diff += (this.isLeapYear(startDate.year)) ? 366 : 365
      startDate.year = startDate.year + 1
    }
    while (startDate.month !== endDate.month) {
      if (startDate.month < endDate.month) {
        if (this.isLeapYear(startDate.year)) diff += this.monthDaysLeap[startDate.month]
        else diff += this.monthDays[startDate.month]
        startDate.month = startDate.month + 1
      } else {
        if (this.isLeapYear(startDate.year)) diff -= this.monthDaysLeap[startDate.month - 1]
        else diff -= this.monthDays[startDate.month - 1]
        startDate.month = startDate.month - 1
      }
    }
    return diff
  }

  generateMonthCal (date) {
    const Month = this.parseDate(date); let day = ''
    let difference = this.getDayDiff(this.epoch, Month)
    difference = difference % 7
    let Month2 = this.parseDate(date)
    day = (this.isGreater(Month2, this.epoch)) ? this.Days[difference] : this.BDays[difference]
    Month2 = this.parseDate(date)
    if (this.isLeapYear(Month2.year)) this.printCal(this.monthDaysLeap[Month2.month], day)
    else this.printCal(this.monthDays[Month2.month], day)
  }
}


//testing
const x = new Month()
x.generateMonthCal('1/2021')
