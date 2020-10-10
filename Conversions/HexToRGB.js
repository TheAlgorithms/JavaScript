function hexStringToRGB (hexString) {
  var r = hexString.substring(0, 2)
  var g = hexString.substring(2, 4)
  var b = hexString.substring(4, 6)

  r = parseInt(r, 16)
  g = parseInt(g, 16)
  b = parseInt(b, 16)
  var obj = { r, g, b }

  return obj
}

console.log(hexStringToRGB('ffffff'))
