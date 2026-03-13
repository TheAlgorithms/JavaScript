// Cooley–Tukey FFT (radix-2, iterative) and polynomial/big-integer multiplication
// Exports: fft, ifft, multiplyPolynomials, convolveReal, multiplyBigIntegers

function isPowerOfTwo(n) {
  return n && (n & (n - 1)) === 0
}

function nextPowerOfTwo(n) {
  let p = 1
  while (p < n) p <<= 1
  return p
}

function bitReverse(n, bits) {
  let rev = 0
  for (let i = 0; i < bits; i++) {
    rev = (rev << 1) | (n & 1)
    n >>= 1
  }
  return rev
}

function fft(re, im, invert = false) {
  const n = re.length
  if (!isPowerOfTwo(n)) {
    throw new Error('fft input length must be a power of two')
  }
  if (im.length !== n) throw new Error('re and im lengths must match')

  // Bit-reverse permutation
  const bits = Math.floor(Math.log2(n))
  for (let i = 0; i < n; i++) {
    const j = bitReverse(i, bits)
    if (i < j) {
      ;[re[i], re[j]] = [re[j], re[i]]
      ;[im[i], im[j]] = [im[j], im[i]]
    }
  }

  // Iterative FFT
  for (let len = 2; len <= n; len <<= 1) {
    const ang = 2 * Math.PI / len * (invert ? 1 : -1)
    const wLenRe = Math.cos(ang)
    const wLenIm = Math.sin(ang)

    for (let i = 0; i < n; i += len) {
      let wRe = 1
      let wIm = 0
      for (let j = 0; j < len / 2; j++) {
        const uRe = re[i + j]
        const uIm = im[i + j]
        const vRe = re[i + j + len / 2]
        const vIm = im[i + j + len / 2]

        // v * w
        const tRe = vRe * wRe - vIm * wIm
        const tIm = vRe * wIm + vIm * wRe

        // butterfly
        re[i + j] = uRe + tRe
        im[i + j] = uIm + tIm
        re[i + j + len / 2] = uRe - tRe
        im[i + j + len / 2] = uIm - tIm

        // w *= wLen
        const nwRe = wRe * wLenRe - wIm * wLenIm
        const nwIm = wRe * wLenIm + wIm * wLenRe
        wRe = nwRe
        wIm = nwIm
      }
    }
  }

  if (invert) {
    for (let i = 0; i < n; i++) {
      re[i] /= n
      im[i] /= n
    }
  }
}

function ifft(re, im) {
  fft(re, im, true)
}

function convolveReal(a, b) {
  const need = a.length + b.length - 1
  const n = nextPowerOfTwo(need)

  const reA = new Array(n).fill(0)
  const imA = new Array(n).fill(0)
  const reB = new Array(n).fill(0)
  const imB = new Array(n).fill(0)

  for (let i = 0; i < a.length; i++) reA[i] = a[i]
  for (let i = 0; i < b.length; i++) reB[i] = b[i]

  fft(reA, imA)
  fft(reB, imB)

  const re = new Array(n)
  const im = new Array(n)
  for (let i = 0; i < n; i++) {
    // (reA + i imA) * (reB + i imB)
    re[i] = reA[i] * reB[i] - imA[i] * imB[i]
    im[i] = reA[i] * imB[i] + imA[i] * reB[i]
  }

  ifft(re, im)

  const res = new Array(need)
  for (let i = 0; i < need; i++) {
    res[i] = Math.round(re[i]) // round to nearest integer to counter FP errors
  }
  return res
}

function multiplyPolynomials(a, b) {
  return convolveReal(a, b)
}

function trimLSD(arr) {
  // Remove trailing zeros in LSD-first arrays
  let i = arr.length - 1
  while (i > 0 && arr[i] === 0) i--
  return arr.slice(0, i + 1)
}

function multiplyBigIntegers(A, B, base = 10) {
  // A, B are LSD-first arrays of digits in given base
  if (!Array.isArray(A) || !Array.isArray(B)) {
    throw new Error('Inputs must be digit arrays')
  }
  const conv = convolveReal(A, B)

  // Carry handling
  const res = conv.slice()
  let carry = 0
  for (let i = 0; i < res.length; i++) {
    const total = res[i] + carry
    res[i] = total % base
    carry = Math.floor(total / base)
  }
  while (carry > 0) {
    res.push(carry % base)
    carry = Math.floor(carry / base)
  }
  const trimmed = trimLSD(res)
  return trimmed.length === 0 ? [0] : trimmed
}

export { fft, ifft, convolveReal, multiplyPolynomials, multiplyBigIntegers }