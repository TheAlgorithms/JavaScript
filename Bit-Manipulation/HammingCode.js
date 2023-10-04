/**
 *   github author: chrdek
 *   license: GPL-3.0 or later
 *
 *   @param {number} b = integer or, binary representation of it
 *
 *   The following code generates the hamming code for a binary sequence
 *   of 32-bit integer values (incl. parity bit check)
 *
 *   Returns the overall of bit count population for values up to 65535, inclusive
 *
 **/

function HammingCode(b) {
  //preallocate total number of integers to count the bits population from.
  let bytes = new Array(65536);
  const bitAlloc = (bin) => {
    let counter = 0;
    while (bin > 0) {
      counter += bin & 1;
      bin >>=1;
      }
  return counter;
  }

//count all 1-bits from entire bit set
for (let k=0; k < 65536; k++)
bytes[k] = bitAlloc(k);

//perform bit shifting for integer values for bit-populated result
return bytes[b & 0xFFFF] + bytes[b >> 16];
}

export { HammingCode }
