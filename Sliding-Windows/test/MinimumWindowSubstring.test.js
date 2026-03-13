/*
 * Test file for Minimum Window Substring
 */

import { minWindowSubstring } from '../MinimumWindowSubstring.js'

test('return smallest window containing all characters', () => {
  expect(minWindowSubstring('ADOBECODEBANC', 'ABC')).toBe('BANC')
})

test('return empty string if no window found', () => {
  expect(minWindowSubstring('HELLO', 'XYZ')).toBe('')
})

test('return full string if it matches exactly', () => {
  expect(minWindowSubstring('ABC', 'ABC')).toBe('ABC')
})
