function octalToBinary (octal) {
  let binary = '' // an empty string to store the binary number
  for (let i = 0; i < octal.length; i++) { // loop through each octal digit
    const digit = parseInt(octal[i], 8) // convert the octal digit to a decimal digit
    let binDigit = digit.toString(2) // convert the decimal digit to a binary digit
    while (binDigit.length < 3) { // pad the binary digit with zeros if needed
      binDigit = '0' + binDigit
    }
    binary += binDigit // concatenate the binary digit to the binary number
  }
  binary = binary.replace(/^0+/, '')
  return binary
}

export { octalToBinary }

// > octalToBinary(46)
// 100110
