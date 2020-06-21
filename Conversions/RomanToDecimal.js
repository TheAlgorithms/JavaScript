var values = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

function romanToDecimal (romanNumber) {
  let prev = ' '

  let sum = 0

  let newPrev = 0
  for (let i = romanNumber.length - 1; i >= 0; i--) {
    const c = romanNumber.charAt(i)

    if (prev !== ' ') {
      newPrev = values[prev] > newPrev ? values[prev] : newPrev
    }

    const currentNum = values[c]
    if (currentNum >= newPrev) {
      sum += currentNum
    } else {
      sum -= currentNum
    }

    prev = c
  }
  return sum
}

console.log(romanToDecimal('XXIIVV'))
console.log(romanToDecimal('MDCCCIV'))
console.log(romanToDecimal('XXIVI'))
