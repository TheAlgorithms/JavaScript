/******************************************************
 Find and retrieve the encryption key automatically
 Note: This is a draft version, please help to modify, Thanks!
 ******************************************************/
function keyFinder (str) { // str is used to get the input of encrypted string
  const wordBank = [
    'I ',
    'You ',
    'We ',
    'They ',
    'He ',
    'She ',
    'It ',
    ' the ',
    'The ',
    ' of ',
    ' is ',
    'Is ',
    ' am ',
    'Am ',
    ' are ',
    'Are ',
    ' have ',
    'Have ',
    ' has ',
    'Has ',
    ' may ',
    'May ',
    ' be ',
    'Be ']
  // let wordbankelementCounter = 0;
  // let key = 0; // return zero means the key can not be found
  const inStr = str.toString() // convert the input to String
  let outStr = '' // store the output value
  let outStrElement = '' // temporary store the word inside the outStr, it is used for comparison
  for (let k = 0; k < 26; k++) { // try the number of key shifted, the sum of character from a-z or A-Z is 26
    outStr = caesarCipherEncodeAndDecodeEngine(inStr, k) // use the encryption engine to decrypt the input string

    // loop through the whole input string
    for (let s = 0; s < outStr.length; s++) {
      for (let i = 0; i < wordBank.length; i++) {
        // initialize the outStrElement which is a temp output string for comparison,
        // use a loop to find the next digit of wordBank element and compare with outStr's digit
        for (let w = 0; w < wordBank[i].length; w++) {
          outStrElement += outStr[s + w]
        }

        // console.log( k + outStrElement + wordBank[i] );//debug

        // this part need to be optimize with the calculation of the number of occurrence of word's probabilities
        // linked list will be used in the next stage of development to calculate the number of occurace of the key
        if (wordBank[i] === outStrElement) {
          return k // return the key number if founded
        }

        outStrElement = '' // reset the temp word
      } // end for ( let i=0; i < wordBank.length; i++)
    }
  }
  return 0 // return 0 if found nothing
}

/* this sub-function is used to assist the keyFinder to find the key */
function caesarCipherEncodeAndDecodeEngine (inStr, numShifted) {
  const shiftNum = numShifted
  let charCode = 0
  let outStr = ''
  let shiftedCharCode = 0
  let result = 0

  for (let i = 0; i < inStr.length; i++) {
    charCode = inStr[i].charCodeAt()
    shiftedCharCode = charCode + shiftNum
    result = charCode

    if ((charCode >= 48 && charCode <= 57)) {
      if (shiftedCharCode < 48) {
        let diff = Math.abs(48 - 1 - shiftedCharCode) % 10

        while (diff >= 10) {
          diff = diff % 10
        }
        document.getElementById('diffID').innerHTML = diff

        shiftedCharCode = 57 - diff

        result = shiftedCharCode
      } else if (shiftedCharCode >= 48 && shiftedCharCode <= 57) {
        result = shiftedCharCode
      } else if (shiftedCharCode > 57) {
        let diff = Math.abs(57 + 1 - shiftedCharCode) % 10

        while (diff >= 10) {
          diff = diff % 10
        }
        document.getElementById('diffID').innerHTML = diff

        shiftedCharCode = 48 + diff

        result = shiftedCharCode
      }
    } else if ((charCode >= 65 && charCode <= 90)) {
      if (shiftedCharCode <= 64) {
        let diff = Math.abs(65 - 1 - shiftedCharCode) % 26

        while ((diff % 26) >= 26) {
          diff = diff % 26
        }
        shiftedCharCode = 90 - diff
        result = shiftedCharCode
      } else if (shiftedCharCode >= 65 && shiftedCharCode <= 90) {
        result = shiftedCharCode
      } else if (shiftedCharCode > 90) {
        let diff = Math.abs(shiftedCharCode - 1 - 90) % 26

        while ((diff % 26) >= 26) {
          diff = diff % 26
        }
        shiftedCharCode = 65 + diff
        result = shiftedCharCode
      }
    } else if ((charCode >= 97 && charCode <= 122)) {
      if (shiftedCharCode <= 96) {
        let diff = Math.abs(97 - 1 - shiftedCharCode) % 26

        while ((diff % 26) >= 26) {
          diff = diff % 26
        }
        shiftedCharCode = 122 - diff
        result = shiftedCharCode
      } else if (shiftedCharCode >= 97 && shiftedCharCode <= 122) {
        result = shiftedCharCode
      } else if (shiftedCharCode > 122) {
        let diff = Math.abs(shiftedCharCode - 1 - 122) % 26

        while ((diff % 26) >= 26) {
          diff = diff % 26
        }
        shiftedCharCode = 97 + diff
        result = shiftedCharCode
      }
    }
    outStr = outStr + String.fromCharCode(parseInt(result))
  }
  return outStr
}

console.log('Testing: ' + keyFinder('test')) // returns 0
