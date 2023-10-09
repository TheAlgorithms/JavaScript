/**
 * Formats a duration in milliseconds into a human-readable string.
 *
 * @param {number} ms - The duration in milliseconds (can be negative).
 * @returns {string} A formatted string representing the duration.
 */
const FormatDuration = (ms) => {
  if (ms < 0) return ''
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000
  }
  return Object.entries(time)
    .filter((val) => val[1] !== 0)
    .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
    .join(', ')
}

/**
 * Converts a duration in milliseconds to a human-readable time format (hours:minutes:seconds).
 *
 * @param {number} ms - The duration in milliseconds (must be non-negative).
 * @returns {string} A formatted string representing the duration in hours:minutes:seconds format.
 * @throws {Error} If the input duration is negative.
 */
const msToDuration = (ms) => {
  if (ms < 0) return 'Duration must be non-negative'
  const seconds = Math.floor(ms / 1000)
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60
  return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${
    remainingSeconds < 10 ? '0' : ''
  }${remainingSeconds}`
}

export { FormatDuration, msToDuration }
