const binaryToDecimal = (binaryString) => {
  let decimalNumber = 0
  const binaryDigits = binaryString.split('').reverse() // Splits the binary number into reversed single digits
  binaryDigits.forEach((binaryDigit, index) => {
    decimalNumber += binaryDigit * (Math.pow(2, index)) // Summation of all the decimal converted digits
  })
  console.log(`Decimal of ${binaryString} is ${decimalNumber}`)
  return decimalNumber
}

export { binaryToDecimal }

// > binaryToDecimal('111001')
// 57

// > binaryToDecimal('101')
// 5
