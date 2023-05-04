



const power = (base, exponent, modulus) => {
  let result = 1
  base %= modulus

  while (exponent) {
    if (exponent & 1) {
      result = result * base % modulus
    }
    base = base * base % modulus
    exponent >>= 1
  }
  return result
}

const checkComposite = (n, a, d, s) => {
  let x = power(a, d, n)

  if (x == 1 || x == n - 1) {
    return false
  }

  for (let r = 1; r < s; r++) {
    x = x * x % n
    if (x == n - 1) {
      return false
    }
  }
  return true
}

const MillerRabin = (n, iter = 5) => {
  if (n < 4) {
    return n == 2 || n == 3
  }

  let s = 0

  let d = n - 1

  while ((d & 1)==0) {
    d >>= 1
    s++
  }

  for (let i = 0; i < iter; i++) {
    let a = 2 + Math.floor(Math.random() * (n-2)) % (n - 4);
    if (checkComposite(n, a, d, s)) {
      return false
    }
  }
  return true
}


console.log(MillerRabin(123))
