import { encrypt, decrypt } from '../KeywordShiftedAlphabet'

test('encrypt of: Hello world! => Aoggj ujngw!', () => {
  const res = encrypt('keyword', 'Hello world!')
  expect(res).toBe('Aoggj ujngw!')
})

test('decrypt of: Aoggj ujngw! => Hello world!', () => {
  const res = decrypt('keyword', 'Aoggj ujngw!')
  expect(res).toBe('Hello world!')
})

test('encrypt of: The Algorithms => Qao Kgdjnbqahp', () => {
  const res = encrypt('keyword', 'The Algorithms')
  expect(res).toBe('Qao Kgdjnbqahp')
})

test('decrypt of: Qao Kgdjnbqahp => The Algorithms', () => {
  const res = decrypt('keyword', 'Qao Kgdjnbqahp')
  expect(res).toBe('The Algorithms')
})
