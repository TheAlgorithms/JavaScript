import { encrypt, decrypt } from '../KeywordShiftedAlphabet'

test('Hello world! === dcrypt(encrypt(Hello world!))', () => {
  const word = 'Hello world!'
  const result = decrypt('keyword', encrypt('keyword', word))
  expect(result).toMatch(word)
})

test('The Algorithms === dcrypt(encrypt(The Algorithms))', () => {
  const word = 'The Algorithms'
  const result = decrypt('keyword', encrypt('keyword', word))
  expect(result).toMatch(word)
})
