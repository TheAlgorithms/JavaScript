// Convert from roman Number to decimal and Vice Versa

var RomanNumerals = {
  toRoman: function (number) {
    var ret = ''
    while (number > 0) {
      if (number / 1000 >= 1) {
        ret += 'M'
        number -= 1000
      } else if (number / 900 >= 1) {
        ret += 'CM'
        number -= 900
      } else if (number / 500 >= 1) {
        ret += 'D'
        number -= 500
      } else if (number / 400 >= 1) {
        ret += 'CD'
        number -= 400
      } else if (number / 100 >= 1) {
        ret += 'C'
        number -= 100
      } else if (number / 90 >= 1) {
        ret += 'XC'
        number -= 90
      } else if (number / 50 >= 1) {
        ret += 'L'
        number -= 50
      } else if (number / 40 >= 1) {
        ret += 'XL'
        number -= 40
      } else if (number / 10 >= 1) {
        ret += 'X'
        number -= 10
      } else if (number / 9 >= 1) {
        ret += 'IX'
        number -= 9
      } else if (number / 5 >= 1) {
        ret += 'V'
        number -= 5
      } else if (number / 4 >= 1) {
        ret += 'IV'
        number -= 4
      } else if (number / 1 >= 1) {
        ret += 'I'
        number -= 1
      }
    }
    return ret
  },
  fromRoman: function (str) {
    var ret = 0
    while (str.length > 0) {
      switch (str.charAt(0)) {
        case 'M':
          str = str.slice(1)
          ret += 1000
          break
        case 'D':
          str = str.slice(1)
          ret += 500
          break
        case 'L':
          str = str.slice(1)
          ret += 50
          break
        case 'C':
          if (str.charAt(1) === 'M') {
            str = str.slice(2)
            ret += 900
          } else if (str.charAt(1) === 'D') {
            str = str.slice(2)
            ret += 400
          } else {
            str = str.slice(1)
            ret += 100
          } break
        case 'X':
          if (str.charAt(1) === 'C') {
            str = str.slice(2)
            ret += 90
          } else if (str.charAt(1) === 'L') {
            str = str.slice(2)
            ret += 40
          } else {
            str = str.slice(1)
            ret += 10
          } break
        case 'V':
          str = str.slice(1)
          ret += 5
          break
        case 'I':
          if (str.charAt(1) === 'X') {
            str = str.slice(2)
            ret += 9
          } else if (str.charAt(1) === 'V') {
            str = str.slice(2)
            ret += 4
          } else {
            str = str.slice(1)
            ret += 1
          } break
      }
    }
    return ret
  }
}
