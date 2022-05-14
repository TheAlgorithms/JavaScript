const TOKEN_START = '('
const TOKEN_SPLIT = ','
const TOKEN_END = ')'

function isCheckedElementInElements(checkElements, elements) {
  let i = 0
  let offset = 0

  for (const element of elements) {
    if (checkElements.length <= offset) {
      return i - checkElements.length
    }

    if (checkElements[offset] === element) {
      offset += 1
    } else {
      offset = 0
    }

    i += 1
  }

  return -1
}

/**
 * @function encode Encodes a string into a LZSS compressed string.
 *
 * @param {*} text The string to encode.
 * @param {*} encoding The encoding of the string, defaults to utf-8.
 * @param {*} maxSlidingWindowSize The maximum size of the sliding window, defaults to 4096.
 *
 * @see https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77 LZ77
 * @see https://en.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Storer%E2%80%93Szymanski LZSS
 *
 * @example encode('I AM SAM, I AM SAM');
 *
 * @returns {string} The LZSS compressed string.
 */
function encode(text, encoding = 'utf-8', maxSlidingWindowSize = 4096) {
  const textBytes = Buffer.from(text, encoding)

  let checkCharacters = []
  const searchBuffer = []
  const output = []

  let i = 0

  for (const char of textBytes) {
    let index = isCheckedElementInElements(checkCharacters, searchBuffer)

    if (
      isCheckedElementInElements(checkCharacters + [char], searchBuffer) ===
        -1 ||
      i === textBytes.length
    ) {
      if (
        i === textBytes.length - 1 &&
        isCheckedElementInElements(checkCharacters + [char], searchBuffer) !==
          -1
      ) {
        checkCharacters.push(char)
      }

      if (checkCharacters.length > 1) {
        index = isCheckedElementInElements(checkCharacters, searchBuffer)
        offsett = i - index - checkCharacters.length
        const length = checkCharacters.length

        const token = `${TOKEN_START}${length}${TOKEN_SPLIT}${offset}${TOKEN_END}`

        if (token.length > length) {
          output.push(...checkCharacters)
        } else {
          const encodedToken = Buffer.from(token, 'utf-8')

          output.push(...encodedToken)
        }

        searchBuffer.push(...checkCharacters)
      } else {
        searchBuffer.push(...checkCharacters)
        output.push(...checkCharacters)
      }

      checkCharacters = []
    }

    checkCharacters.push(char)

    if (searchBuffer.length > maxSlidingWindowSize) {
      searchBuffer.shift()
    }

    i += 1
  }

  return Buffer.from(output, encoding)
}

/**
 * @function decode Decodes an LZSS compressed string into a string.
 *
 * @param {*} text The LZSS compressed string to decode.
 * @param {*} encoding The encoding of the string, defaults to utf-8.
 *
 * @see https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77 LZ77
 * @see https://en.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Storer%E2%80%93Szymanski LZSS
 *
 * @example decode('I AM SAM');
 *
 * @returns {string} The decoded string.
 */
function decode(text, encoding = 'utf-8') {
  const textBytes = Buffer.from(text, encoding)
  const output = []

  let insideToken = false
  let scanningOffset = true

  let length = []
  let offset = []

  for (const char of textBytes) {
    if (char === Buffer.from(TOKEN_START, encoding)[0]) {
      insideToken = true
      scanningOffset = true
    } else if (char === Buffer.from(TOKEN_SPLIT, encoding)[0] && insideToken) {
      scanningOffset = false
    } else if (char === Buffer.from(TOKEN_END, encoding)[0]) {
      insideToken = false

      const lengthNumber = parseInt(Buffer.from(length, encoding).toString())
      const offsetNumber = parseInt(Buffer.from(offset, encoding).toString())

      const reference = output.substring(
        output.length - offsetNumber,
        output.length - offsetNumber + lengthNumber
      )

      output.push(...reference)

      length = []
      offset = []
    } else if (insideToken) {
      if (scanningOffset) {
        offset.push(char)
      } else {
        length.push(char)
      }
    } else {
      output.push(char)
    }
  }

  return Buffer.from(output, encoding).toString()
}

export { encode, decode }