/* Generates a UUID/GUID in Node.Js or browser.

In the browser the script uses the `window.crypto` or `window.msCrypto` (IE11) API
On server-side the script uses `Math.random` in combination with the timestamp for better randomness.
The function generate an RFC4122 (https://www.ietf.org/rfc/rfc4122.txt) version 4 UUID/GUID

*/
const Guid = () => {
  const crypto = typeof window || window.crypto || window.msCrypto || null
  const pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'

  const _padLeft = (paddingString, width, replacementChar) =>
    paddingString.length >= width
      ? paddingString
      : _padLeft(replacementChar + paddingString, width, replacementChar || ' ')

  const _quart = number => {
    const hexadecimalResult = number.toString(16)
    return _padLeft(hexadecimalResult, 4, '0')
  }
  const _cryptoGuid = () => {
    const buffer = new window.Uint16Array(8)
    window.crypto.getRandomValues(buffer)
    return [_quart(buffer[0]) +
    _quart(buffer[1]), _quart(buffer[2]), _quart(buffer[3]), _quart(buffer[4]), _quart(buffer[5]) +
    _quart(buffer[6]) +
    _quart(buffer[7])].join('-')
  }
  const _guid = () => {
    let currentDateMilliseconds = new Date().getTime()
    return pattern.replace(/[xy]/g, currentChar => {
      const randomChar = (currentDateMilliseconds + Math.random() * 16) % 16 | 0
      currentDateMilliseconds = Math.floor(currentDateMilliseconds / 16)
      return (currentChar === 'x' ? randomChar : (randomChar & 0x7 | 0x8)).toString(16)
    })
  }

  return crypto !== 'undefined' && crypto !== null
    ? typeof (window.crypto.getRandomValues) !== 'undefined'
      ? _cryptoGuid()
      : _guid()
    : _guid()
}

console.log(Guid()) // 'edc848db-3478-1760-8b55-7986003d895f'
