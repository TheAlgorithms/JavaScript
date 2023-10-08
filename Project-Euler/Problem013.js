/**
 * Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.
 */

export function largeSum(bignum) {
  const nums = []
  for (let i = 0; i < bignum.length; i += 50) {
    nums.push(bignum.slice(i, i + 50))
  }

  let pos = nums[0].length
  let ret = ''
  let num = 0

  while (pos--) {
    for (let i = nums.length; i--; ) {
      num += +nums[i].charAt(pos)
    }
    ret = (num % 10) + ret
    num = (num / 10) | 0
  }

  if (num > 0) {
    ret = num + ret
  }
  return ret.slice(0, 10)
}
