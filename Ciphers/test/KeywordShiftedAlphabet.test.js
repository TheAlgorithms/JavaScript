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

test('rejects keywords with repeated characters', () => {
  // 'HELLO' repeats L; encrypt must throw instead of producing
  // ciphertext that cannot be decrypted back
  expect(() => encrypt('HELLO', 'ATTACK AT DAWN')).toThrow('Invalid keyword!')
  expect(() => decrypt('HELLO', 'HSSHLG HS LHVK')).toThrow('Invalid keyword!')
})

test('rejects keywords that repeat a character in another case', () => {
  // the table is built from the lowercased keyword, so 'Kk' is a duplicate
  expect(() => encrypt('Kk', 'ATTACK')).toThrow('Invalid keyword!')
})
