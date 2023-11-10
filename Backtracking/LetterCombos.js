function letterCombinations(digits) {
  if (digits === '') {
    // base case
    return []
  }

  const dic = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }

  const res = [] // letter combinations to return
  const combo = []

  function backtrack(i) {
    if (i === digits.length) {
      res.push(combo.join(''))
      return
    }

    for (const c of dic[digits[i]]) {
      combo.push(c)
      backtrack(i + 1)
      combo.pop()
    }
  }

  backtrack(0)
  return res
}

export { letterCombinations }
