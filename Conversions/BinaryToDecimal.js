function binaryToDeicmal (binaryNumber) {
  let decimalNumber = 0
  const binaryDigits = binaryNumber.split('').reverse() // Splits the bnary number in revered single digits
  binaryDigits.forEach((binaryDigit, index) => {
    decimalNumber += binaryDigit * (Math.pow(2, index)) // Summation of all the decimal converted digits
  })
  console.log(`Decimal of ${binaryNumber} is ${decimalNumber}`)
}

binaryToDeicmal('111001')
binaryToDeicmal('101')
