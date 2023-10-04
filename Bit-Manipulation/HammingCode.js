/**
 *   github author: chrdek
 *   license: GPL-3.0 or later
 *
 *   @param {number} b
 *
 *   The following code generates the hamming code for
 *   32-bit integer values (incl. parity bit check)
 *
 **/

function HammingCode(b) {
  var bytes = new Array(65536);
  const bitAlloc = (bin) => {
    var cnt = 0;
    while (bin > 0) {
      cnt += bin & 1;
      bin >>=1;
      }
  return cnt;
  } //end of bitallocation

for (var k=0; k < 65536; k++) bytes[k] = bitAlloc(k);

//perform leftmost shifting for integer value
return bytes[bin & 0xFFFF] + bytes[b >> 16];
}

export { HammingCode }