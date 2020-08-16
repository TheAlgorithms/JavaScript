function binaryToDeicmal (binaryNumber) {
    let decimalNumber = 0
    const binaryDigits = binaryNumber.split('').reverse()
    binaryDigits.forEach((binaryDigit, index) => {
      decimalNumber += binaryDigit * (Math.pow(2, index))
    })
    console.log(`Decimal of ${binaryNumber} is ${decimalNumber}`)
  }
  
  binaryToDeicmal('111001')
  binaryToDeicmal('101')
  