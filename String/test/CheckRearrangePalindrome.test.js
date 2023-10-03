import { palindromeRearranging } from '../CheckRearrangePalindrome'

test('palindromeRearranging(apple) -> false', () => {
  const word = 'apple'
  const res = palindromeRearranging(word)
  expect(res).toBeFalsy()
})

test('palindromeRearranging(aapplle) -> true', () => {
  const word = 'aapplle'
  const res = palindromeRearranging(word)
  expect(res).toBeTruthy()
})

test('palindromeRearranging(value) -> false', () => {
  const word = 'value'
  const res = palindromeRearranging(word)
  expect(res).toBeFalsy()
})

test('palindromeRearranging(aaeccrr) -> true', () => {
  const word = 'aaeccrr'
  const res = palindromeRearranging(word)
  expect(res).toBeTruthy()
})
