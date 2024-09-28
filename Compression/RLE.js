/*
 * RLE (Run Length Encoding) is a simple form of data compression.
 * The basic idea is to represent repeated successive characters as a single count and character.
 * For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".
 *
 * @author - [ddaniel27](https://github.com/ddaniel27)
 */

function Compress(str) {
  let compressed = ''
  let count = 1

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      compressed += count + str[i]
      count = 1
      continue
    }

    count++
  }

  return compressed
}

function Decompress(str) {
  let decompressed = ''
  let match = [...str.matchAll(/(\d+)(\D)/g)] // match all groups of digits followed by a non-digit character

  match.forEach((item) => {
    let [count, char] = [item[1], item[2]]
    decompressed += char.repeat(count)
  })

  return decompressed
}

export { Compress, Decompress }
