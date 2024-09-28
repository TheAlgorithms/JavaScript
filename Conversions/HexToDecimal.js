function hexToInt(hexNum) {
  if (!/^[0-9A-F]+$/.test(hexNum)) {
    throw new Error('Invalid hex string.')
  }
  const numArr = hexNum.split('') // converts number to array
  return numArr.map((item, index) => {
    switch (item) {
      case 'A':
        return 10
      case 'B':
        return 11
      case 'C':
        return 12
      case 'D':
        return 13
      case 'E':
        return 14
      case 'F':
        return 15
      default:
        return parseInt(item)
    }
  })
}

function hexToDecimal(hexNum) {
  const intItemsArr = hexToInt(hexNum)
  return intItemsArr.reduce((accumulator, current, index) => {
    return (
      accumulator + current * Math.pow(16, intItemsArr.length - (1 + index))
    )
  }, 0)
}

export { hexToDecimal }
