import { multiplyPolynomials, multiplyBigIntegers, convolveReal } from '../FFT'

describe('FFT polynomial multiplication', () => {
  it('multiplies small polynomials', () => {
    const a = [1, 2, 3] // 1 + 2x + 3x^2
    const b = [4, 5] // 4 + 5x
    expect(multiplyPolynomials(a, b)).toEqual([4, 13, 22, 15])
  })

  it('convolution matches naive for random arrays', () => {
    const a = [0, 1, 0, 2, 3]
    const b = [1, 2, 3]
    const conv = convolveReal(a, b)
    const naive = []
    for (let i = 0; i < a.length + b.length - 1; i++) {
      let sum = 0
      for (let j = 0; j < a.length; j++) {
        const k = i - j
        if (k >= 0 && k < b.length) sum += a[j] * b[k]
      }
      naive.push(sum)
    }
    expect(conv).toEqual(naive)
  })
})

describe('FFT big integer multiplication', () => {
  function digitsToBigInt(digs, base = 10) {
    // LSD-first digits to BigInt
    let s = ''
    for (let i = digs.length - 1; i >= 0; i--) s += digs[i].toString(base)
    return BigInt(s)
  }

  function bigIntToDigits(n, base = 10) {
    if (n === 0n) return [0]
    const digs = []
    const b = BigInt(base)
    let x = n
    while (x > 0n) {
      digs.push(Number(x % b))
      x /= b
    }
    return digs
  }

  it('multiplies large integer arrays (base 10)', () => {
    const A = Array.from({ length: 50 }, () => Math.floor(Math.random() * 10))
    const B = Array.from({ length: 50 }, () => Math.floor(Math.random() * 10))
    const prodDigits = multiplyBigIntegers(A, B, 10)
    const prodBigInt = digitsToBigInt(A) * digitsToBigInt(B)
    expect(prodDigits).toEqual(bigIntToDigits(prodBigInt))
  })

  it('handles leading zeros and zero cases', () => {
    expect(multiplyBigIntegers([0], [0])).toEqual([0])
    expect(multiplyBigIntegers([0, 0, 1], [0, 2])).toEqual([0, 0, 0, 2])
  })
})