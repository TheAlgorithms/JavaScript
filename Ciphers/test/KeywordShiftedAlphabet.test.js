import { encrypt, decrypt } from '../KeywordShiftedAlphabet'

test('Hello world! === decrypt(encrypt(Hello world!))', () => {
  const word = 'Hello world!'
  const result = decrypt('keyword', encrypt('keyword', word))
  expect(result).toMatch(word)
})

test('The Algorithms === decrypt(encrypt(The Algorithms))', () => {
  const word = 'The Algorithms'
  const result = decrypt('keyword', encrypt('keyword', word))
  expect(result).toMatch(word)
})
