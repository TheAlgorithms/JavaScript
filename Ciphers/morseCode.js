var MORSE_CODE_DICT = {
  'A':'.-', 'B':'-...',
  'C':'-.-.', 'D':'-..', 'E':'.',
  'F':'..-.', 'G':'--.', 'H':'....',
  'I':'..', 'J':'.---', 'K':'-.-',
  'L':'.-..', 'M':'--', 'N':'-.',
  'O':'---', 'P':'.--.', 'Q':'--.-',
  'R':'.-.', 'S':'...', 'T':'-',
  'U':'..-', 'V':'...-', 'W':'.--',
  'X':'-..-', 'Y':'-.--', 'Z':'--..',
  '1':'.----', '2':'..---', '3':'...--',
  '4':'....-', '5':'.....', '6':'-....',
  '7':'--...', '8':'---..', '9':'----.',
  '0':'-----', ', ':'--..--', '.':'.-.-.-',
  '?':'..--..', '/':'-..-.', '-':'-....-',
  '(':'-.--.', ')':'-.--.-'
};

function encrypt(message) {
  let cipher = '';
  for(let letter of message){
    if(letter !== ' ')
      cipher += MORSE_CODE_DICT[letter] + ' ';
    else
      cipher += ' ';
  }
  return cipher;
}

function decrypt(message) {
  message += ' ';
  let decipher = '';
  let citext = '';
  let i = 0;
  for(let letter of message) {
    if(letter !== ' '){
      i = 0
      citext += letter;
    }else {
      i += 1;
      if(i === 2){
        decipher += ' ';
      }else {
        decipher += getKeyByValue(citext);
        citext = '';
      }
    }
  }
  return decipher;
}

let message = 'TEST';
let code = encrypt(message.toUpperCase());
let ans = decrypt(code);

console.log(message + '(' + code + ') => ' + ans);

function getKeyByValue(value){
  return Object.keys(MORSE_CODE_DICT).find(key => 
    MORSE_CODE_DICT[key] === value);
}
