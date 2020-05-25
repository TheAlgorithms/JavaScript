// Hex Encoding to base64
// Example: Hex=12c13f1d313c315cf313513d13; =====> Base64=EsE/HTE8MVzzE1E9Ew==;

function hexToBase64 (hex) {
  const hexToBase64 = hex => Buffer.from(hex, 'hex').toString('base64')
}
console.log('the result is ' + hexToBase64)
