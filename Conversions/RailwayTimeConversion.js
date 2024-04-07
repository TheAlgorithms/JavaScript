/*
    The time conversion of normalized time to the railway is a simple algorithm
    because we know that if the time is in 'AM' value it means they only want
    some changes on hours and minutes and if the time in 'PM' it means the only
    want some changes in hour value.

    Input Format -> 07:05:45PM
    Output Format -> 19:05:45

    Problem & Explanation Source : https://www.mathsisfun.com/time.html
*/

/**
 * RailwayTimeConversion method converts normalized time string to Railway time string.
 * @param {String} timeString Normalized time string.
 * @returns {String} Railway time string.
 */
const RailwayTimeConversion = (timeString) => {
  // firstly, check that input is a string or not.
  if (typeof timeString !== 'string') {
    throw new TypeError('Argument is not a string.')
  }
  // split the string by ':' character.
  const [hour, minute, secondWithShift] = timeString.split(':')
  // split second and shift value.
  const [second, shift] = [
    secondWithShift.substring(0, 2),
    secondWithShift.substring(2)
  ]
  // convert shifted time to not-shift time(Railway time) by using the above explanation.
  if (shift === 'PM') {
    if (parseInt(hour) === 12) {
      return `${hour}:${minute}:${second}`
    } else {
      return `${parseInt(hour) + 12}:${minute}:${second}`
    }
  } else {
    if (parseInt(hour) === 12) {
      return `00:${minute}:${second}`
    } else {
      return `${hour}:${minute}:${second}`
    }
  }
}

export { RailwayTimeConversion }
