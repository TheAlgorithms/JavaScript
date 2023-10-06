// About base64: https://en.wikipedia.org/wiki/Base64

/**
 * Converts an array of bytes to base64 encoding
 * @param {ArrayBuffer} binaryData An ArrayBuffer which represents an array of bytes
 * @returns {string} A string containing the base64 encoding of `binaryData`
 */
function bufferToBase64(binaryData) {
  // The base64 encoding uses the following set of characters to encode any binary data as text
  const base64Table =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  // Every 3 bytes translates to 4 base64 characters, if we have less than 3 bytes we must append '=' chars as padding
  const padding = 3 - (binaryData.byteLength % 3)
  // Create an instance of Uint8Array, to read from the binaryData array buffer
  const byteView = new Uint8Array(binaryData)
  let result = ''

  // Loop through all bytes in the buffer, in increments of 3 bytes
  for (let i = 0; i < byteView.byteLength; i += 3) {
    // Get the index for the next 4 base64 chars
    const char1 = (byteView[i] & 252) >> 2
    const char2 = ((byteView[i] & 3) << 4) + ((byteView[i + 1] & 240) >> 4)
    const char3 = ((byteView[i + 1] & 15) << 2) + ((byteView[i + 2] & 192) >> 6)
    const char4 = byteView[i + 2] & 63

    result +=
      base64Table[char1] +
      base64Table[char2] +
      base64Table[char3] +
      base64Table[char4]
  }

  // Add padding '=' chars if needed
  if (padding !== 3) {
    const paddedResult =
      result.slice(0, result.length - padding) + '='.repeat(padding)
    return paddedResult
  }

  return result
}

export { bufferToBase64 }
