const NUMBER_MAP = {
  // NOTE: standard --fix converts the numbers starting with 1 to number
  '000': '0',
  '001': '1',
  '010': '2',
  '011': '3',
  100: '4',
  101: '5',
  110: '6',
  111: '7'
}

function binaryToOctal (binaryNumber) {
  // checking if the number is negative
  const isNegative = binaryNumber < 0
  // padding number with 0 incase its required
  let stringNumber = Math.abs(binaryNumber).toString()
  const digits = Math.ceil(stringNumber.length / 3) * 3
  stringNumber = stringNumber.padStart(digits, '0')
  // updating the resultant octal number
  let result = ''
  for (let i = 0; i < digits; i += 3) {
    result += NUMBER_MAP[stringNumber.slice(i, i + 3)]
  }
  return isNegative ? -result : +result
}

function main () {
  console.log(binaryToOctal(-101010))
  console.log(binaryToOctal(101010))
  console.log(binaryToOctal(10111))
}

main()
