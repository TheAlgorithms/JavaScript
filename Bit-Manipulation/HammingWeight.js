/**
 *  github author: chrdek
 *  license: GPL-3.0 or later
 *
 *  @param {number} b = integer or, binary representation of it
 *
 *  The following code generates the "hamming weight" for a binary sequence
 *  of 32-bit integer values, producing the relevant integer code for it.
 *
 *  Returns the overall of bit count population for values up to 65535, inclusive.
 *  
 *  This algorithm utilizes minimum amount of byte space reads and can be very easily
 *  extended to its 64-bit counterpart.
 *
 **/

function HammingWeight(b) {
  //preallocate total number of bytes to count the bits population from
  let bytes = new Array(65536);

  //count the bit allocation of the binary sequence by shift in place of the resulting bits
  //can be used with xor as well.
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

export { HammingWeight }
