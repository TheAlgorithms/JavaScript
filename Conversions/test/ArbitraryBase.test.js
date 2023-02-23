import { convertArbitraryBase, convertArbitraryBaseBigIntVersion } from '../ArbitraryBase'

test('Check the answer of convertArbitraryBase(98, 0123456789, 01234567) is 142', () => {
  const res = convertArbitraryBase('98', '0123456789', '01234567')
  expect(res).toBe('142')
})

test('Check the answer of convertArbitraryBase(98, 0123456789, abcdefgh) is bec', () => {
  const res = convertArbitraryBase('98', '0123456789', 'abcdefgh')
  expect(res).toBe('bec')
})

test('Check the answer of convertArbitraryBase(98, 0123456789, 98765432) is 857', () => {
  const res = convertArbitraryBase('98', '0123456789', '98765432')
  expect(res).toBe('857')
})

test('Check the answer of convertArbitraryBase(129, 0123456789, 01234567) is 201', () => {
  const res = convertArbitraryBase('129', '0123456789', '01234567')
  expect(res).toBe('201')
})

test('Check the answer of convertArbitraryBase(112, 0123456789, 12345678) is 271', () => {
  const res = convertArbitraryBase('112', '0123456789', '12345678')
  expect(res).toBe('271')
})

test('Check the answer of convertArbitraryBase(112, 0123456789, 123456789) is 245', () => {
  const res = convertArbitraryBase('112', '0123456789', '123456789')
  expect(res).toBe('245')
})

test('Check the answer of convertArbitraryBase(111, 0123456789, abcdefgh) is bfh', () => {
  const res = convertArbitraryBase('111', '0123456789', 'abcdefgh')
  expect(res).toBe('bfh')
})

test('Unicode awareness', () => {
  const res = convertArbitraryBase('98', '0123456789', '💝🎸🦄')
  expect(res).toBe('🎸💝🎸🦄🦄')
})

test('zero', () => {
  const res = convertArbitraryBase('0', '0123456789', 'abc')
  expect(res).toBe('a')
})

test('BigInt version with input string of arbitrary length', () => {
  const resBigIntVersion = convertArbitraryBaseBigIntVersion(
    String(10n ** 100n),
    '0123456789',
    '0123456789abcdefghijklmnopqrstuvwxyz'
  )

  expect(resBigIntVersion).toBe((10n ** 100n).toString(36))
})
