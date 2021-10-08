// About base64: https://en.wikipedia.org/wiki/Base64

/**
 * Converts a base64 string to an array of bytes
 * @param {string} b64 A base64 string
 * @returns {ArrayBuffer} An ArrayBuffer representing the bytes encoded by the base64 string
 */
function base64ToBuffer (b64) {
  // The base64 encoding uses the following set of characters to encode any binary data as text
  const base64Table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  // Find the index of char '=' first occurrence
  const paddingIdx = b64.indexOf('=')
  // Remove padding chars from base64 string, if there are any
  const b64NoPadding = paddingIdx !== -1 ? b64.slice(0, paddingIdx) : b64
  // Calculate the length of the result buffer
  const bufferLength = Math.floor((b64NoPadding.length * 6) / 8)
  // Create the result buffer
  const result = new ArrayBuffer(bufferLength)
  // Create an instance of Uint8Array, to write to the `result` buffer
  const byteView = new Uint8Array(result)

  // Loop through all chars in the base64 string, in increments of 4 chars, and in increments of 3 bytes
  for (let i = 0, j = 0; i < b64NoPadding.length; i += 4, j += 3) {
    // Get the index of the next 4 base64 chars
    const b64Char1 = base64Table.indexOf(b64NoPadding[i])
    const b64Char2 = base64Table.indexOf(b64NoPadding[i + 1])
    let b64Char3 = base64Table.indexOf(b64NoPadding[i + 2])
    let b64Char4 = base64Table.indexOf(b64NoPadding[i + 3])

    // If base64 chars 3 and 4 don't exit, then set them to 0
    if (b64Char3 === -1) b64Char3 = 0
    if (b64Char4 === -1) b64Char4 = 0

    // Calculate the next 3 bytes
    const byte1 = (b64Char1 << 2) + ((b64Char2 & 48) >> 4)
    const byte2 = ((b64Char2 & 15) << 4) + ((b64Char3 & 60) >> 2)
    const byte3 = ((b64Char3 & 3) << 6) + b64Char4

    byteView[j] = byte1
    byteView[j + 1] = byte2
    byteView[j + 2] = byte3
  }

  return result
}

export { base64ToBuffer }
