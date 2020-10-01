const enAtbash = (message) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const tebahpla = 'ZYXWVUTSRQPONMLKJIHGFEDCBA'
  const alphabet1 = 'abcdefghijklmnopqrstuvwxyz'
  const tebahpla1 = 'zyxwvutsrqponmlkjihgfedcba'
  let decodedString = ''

  for (let i = 0; i < message.length; i++) {
    const codedLetra = message.charAt(i)
    if (/[^a-zA-Z]/.test(message[i])) {
      decodedString = decodedString + message[i]
    } else if (message[i] === message[i].toUpperCase()) {
      const letraPosMayus = alphabet.indexOf(codedLetra)
      const tebLetraPosMayus = tebahpla.charAt(letraPosMayus)
      decodedString = decodedString + tebLetraPosMayus
    } else {
      const letraPosMinus1 = alphabet1.indexOf(codedLetra)
      const tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1)
      decodedString = decodedString + tebLetraPosMinus1
    }
  }
  return decodedString
}

// testing code
console.log(enAtbash('Hello World!'))
