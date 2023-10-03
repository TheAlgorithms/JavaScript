/**
 * @author mrmagic2020
 * @description Enciphers a combination of letters, numbers and symbols into morse code.
 * @see https://en.wikipedia.org/wiki/Morse_code
 * @param {string} msg The message to be enciphered.
 * @param {string} dot Symbol representing the dots.
 * @param {string} dash Symbol representing the dash.
 * @returns {string} Enciphered morse code.
 * @example morse('Hello World!') = '**** * *-** *-** ---   *-- --- *-* *-** -** -*-*--'
 */
const morse = (msg, dot = '*', dash = '-') => {
  const key = {
    A: '*-',
    B: '-***',
    C: '-*-*',
    D: '-**',
    E: '*',
    F: '**-*',
    G: '--*',
    H: '****',
    I: '**',
    J: '*---',
    K: '-*-',
    L: '*-**',
    M: '--',
    N: '-*',
    O: '---',
    P: '*--*',
    Q: '--*-',
    R: '*-*',
    S: '***',
    T: '-',
    U: '**-',
    V: '***-',
    W: '*--',
    X: '-**-',
    Y: '-*--',
    Z: '--**',
    1: '*----',
    2: '**---',
    3: '***--',
    4: '****-',
    5: '*****',
    6: '-****',
    7: '--***',
    8: '---**',
    9: '----*',
    0: '-----',
    '.': '*-*-*-',
    ',': '--**--',
    '?': '**--**',
    '!': '-*-*--',
    "'": '*----*',
    '"': '*-**-*',
    '(': '-*--*',
    ')': '-*--*-',
    '&': '*-***',
    ':': '---***',
    ';': '-*-*-*',
    '/': '-**-*',
    _: '**--*-',
    '=': '-***-',
    '+': '*-*-*',
    '-': '-****-',
    $: '***-**-',
    '@': '*--*-*'
  }

  let newMsg = ''

  msg
    .toString()
    .split('')
    .forEach((e) => {
      if (/[a-zA-Z]/.test(e)) {
        newMsg += key[e.toUpperCase()]
          .replaceAll('*', dot)
          .replaceAll('-', dash)
      } else if (Object.keys(key).includes(e)) {
        newMsg += key[e].replaceAll('*', dot).replaceAll('-', dash)
      } else {
        newMsg += e
      }
      newMsg += ' '
    })

  return newMsg.trim()
}

export { morse }
