import { encrypt, decrypt } from '../VigenereCipher'

test('Hello world! === decrypt(encrypt(Hello world!))', () => {
  const word = 'Hello world!'
  const result = decrypt(encrypt(word, 'code'), 'code')
  expect(result).toMatch(word)
})

test('The Algorithms === decrypt(encrypt(The Algorithms))', () => {
  const word = 'The Algorithms'
  const result = decrypt(encrypt(word, 'code'), 'code')
  expect(result).toMatch(word)
})
