// Module that replicates the MD5 Cryptographic Hash
// function in Javascript.

// main variables
const CHAR_SIZE = 8

const S = [
  7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5,
  9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11,
  16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15,
  21
]

const K = [
  0xd76aa478, 0xe8c7b756, 0x242070db, 0xc1bdceee, 0xf57c0faf, 0x4787c62a,
  0xa8304613, 0xfd469501, 0x698098d8, 0x8b44f7af, 0xffff5bb1, 0x895cd7be,
  0x6b901122, 0xfd987193, 0xa679438e, 0x49b40821, 0xf61e2562, 0xc040b340,
  0x265e5a51, 0xe9b6c7aa, 0xd62f105d, 0x02441453, 0xd8a1e681, 0xe7d3fbc8,
  0x21e1cde6, 0xc33707d6, 0xf4d50d87, 0x455a14ed, 0xa9e3e905, 0xfcefa3f8,
  0x676f02d9, 0x8d2a4c8a, 0xfffa3942, 0x8771f681, 0x6d9d6122, 0xfde5380c,
  0xa4beea44, 0x4bdecfa9, 0xf6bb4b60, 0xbebfbc70, 0x289b7ec6, 0xeaa127fa,
  0xd4ef3085, 0x04881d05, 0xd9d4d039, 0xe6db99e5, 0x1fa27cf8, 0xc4ac5665,
  0xf4292244, 0x432aff97, 0xab9423a7, 0xfc93a039, 0x655b59c3, 0x8f0ccc92,
  0xffeff47d, 0x85845dd1, 0x6fa87e4f, 0xfe2ce6e0, 0xa3014314, 0x4e0811a1,
  0xf7537e82, 0xbd3af235, 0x2ad7d2bb, 0xeb86d391
]

/**
 * Converts the string to little endian in groups of 8
 *
 * @param {string} str - 32 character string representation (binary)
 * @returns {string} - little endian string
 *
 * @example
 *      toLittleEndian("11111111111110100011100101000010"); // "01000010001110011111101011111111"
 */
function toLittleEndian(str) {
  return (
    str.slice(24, 32) + str.slice(16, 24) + str.slice(8, 16) + str.slice(0, 8)
  )
}

/**
 * Converts a positive integer to a hexadecimal string representation
 *
 * @param {number} num - A 32 bit positive integer
 * @returns {string} - hex representation of the number
 *
 * @example
 *      toHex(255); // "ff000000"
 */
function toHex(num) {
  let str = pad(num.toString(16), 8)
  return str.slice(6, 8) + str.slice(4, 6) + str.slice(2, 4) + str.slice(0, 2)
}

/**
 * Adds padding to binary/hex string representation
 *
 * @param {string} str - string representation (binary/hex)
 * @param {int} bits - total number of bits wanted
 * @return {string} - string representation padding with empty (0) bits
 *
 * @example
 *      pad("10011", 8); // "00010011"
 */
function pad(str, bits) {
  let res = str
  while (res.length % bits !== 0) {
    res = '0' + res
  }
  return res
}

/**
 * Separates string into chunks of the same size
 *
 * @param {string} str - string to separate into chunks
 * @param {int} size - number of characters wanted in each chunk
 * @return {array} - array of original string split into chunks
 *
 * @example
 *      chunkify("this is a test", 2)
 */
function chunkify(str, size) {
  const chunks = []
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size))
  }
  return chunks
}

/**
 * Rotates the bits to the left
 *
 * @param {number} bits - 32 bit number
 * @param {int} turns - number of rotations to make
 * @return {string} - number after bits rotation
 *
 * @example
 *      rotateLeft("1011", 3); // "1101"
 */
function rotateLeft(bits, turns) {
  return (bits << turns) | (bits >>> (32 - turns))
}

/**
 * Pre-processes message to feed the algorithm loop
 *
 * @param {string} message - message to pre-process
 * @return {string} - processed message
 */
function preProcess(message) {
  // convert message to binary representation padded to
  // 8 bits, and add 1
  let m =
    message
      .split('')
      .map((e) => e.charCodeAt(0))
      .map((e) => e.toString(2))
      .map((e) => pad(e, 8))
      .join('') + '1'

  // extend message by adding empty bits (0)
  while (m.length % 512 !== 448) {
    m += '0'
  }

  m = chunkify(m, 32)
    .map((e) => toLittleEndian(e))
    .join('')

  // length of message in binary, padded, and extended
  // to a 64 bit representation
  let ml = (message.length * CHAR_SIZE).toString(2)
  ml = pad(ml, 64)

  return m + ml.slice(32) + ml.slice(0, 32)
}

/**
 * Hashes message using MD5 Cryptographic Hash Function
 *
 * @see
 * For more info: https://en.wikipedia.org/wiki/MD5
 * 
 * @param {string} message - message to hash
 * @return {string} - message digest (hash value)
 */
function MD5(message) {
  // Initialize variables:
  const [a0, b0, c0, d0] = [0, 1, 2, 3]
  const hashes = Uint32Array.from([
    0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476
  ])

  // pre-process message and split into 512 bit chunks
  const bits = preProcess(message)
  const chunks = chunkify(bits, 512)

  chunks.forEach(function (chunk, _) {
    // break each chunk into 16 32-bit words
    const words = Uint32Array.from(
      chunkify(chunk, 32).map((e) => parseInt(e, 2))
    )

    // initialize variables for this chunk
    const [A, B, C, D] = [0, 1, 2, 3]
    const abcd = Uint32Array.from([
      hashes[a0],
      hashes[b0],
      hashes[c0],
      hashes[d0]
    ])

    for (let i = 0; i < 64; i++) {
      const [F, g] = [0, 1]
      const fg = Uint32Array.from([0, 0])

      if (i <= 15) {
        fg[F] = (abcd[B] & abcd[C]) | (~abcd[B] & abcd[D])
        fg[g] = i
      } else if (i <= 31) {
        fg[F] = (abcd[D] & abcd[B]) | (~abcd[D] & abcd[C])
        fg[g] = (5 * i + 1) % 16
      } else if (i <= 47) {
        fg[F] = abcd[B] ^ abcd[C] ^ abcd[D]
        fg[g] = (3 * i + 5) % 16
      } else {
        fg[F] = abcd[C] ^ (abcd[B] | ~abcd[D])
        fg[g] = (7 * i) % 16
      }

      fg[F] = fg[F] + abcd[A] + K[i] + words[fg[g]]
      abcd[A] = abcd[D]
      abcd[D] = abcd[C]
      abcd[C] = abcd[B]
      abcd[B] = abcd[B] + rotateLeft(fg[F], S[i])
    }

    // add values for this chunk to main hash variables (unsigned)
    hashes[a0] = hashes[a0] + abcd[A]
    hashes[b0] = hashes[b0] + abcd[B]
    hashes[c0] = hashes[c0] + abcd[C]
    hashes[d0] = hashes[d0] + abcd[D]
  })

  // combine hash values of main hash variables and return
  const HH = [hashes[a0], hashes[b0], hashes[c0], hashes[d0]]
    .map((e) => toHex(e))
    .join('')

  return HH
}

// export MD5 function
export { MD5 }
