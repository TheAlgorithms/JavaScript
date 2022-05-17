import { encrypt, decrypt } from '../VigenereCipher'

test('Hello world! === dcrypt(encrypt(Hello world!))', () => {
  const word = 'Hello world!'
  const result = decrypt(encrypt(word, 'code'), 'code')
  expect(result).toMatch(word)
})

test('The Algorithms === dcrypt(encrypt(The Algorithms))', () => {
  const word = 'The Algorithms'
  const result = decrypt(encrypt(word, 'code'), 'code')
  expect(result).toMatch(word)
})
