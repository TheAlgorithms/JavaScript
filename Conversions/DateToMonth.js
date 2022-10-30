
const dateToMonth = (date) => {
  const months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  if (typeof date !== 'string') {
    return new TypeError('Argument isnt a string.')
  }
  return months[parseInt(date.split('/')[1])]
}

export { dateToMonth }
