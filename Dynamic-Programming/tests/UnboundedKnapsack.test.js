import { longestPalindromicSubstring } from '../UnboundedKnapsack';

test('Test Case 1', () => {
  const input = 'babad';
  const expectedOutput = 'bab';
  const result = longestPalindromicSubstring(input);
  expect(result).toBe(expectedOutput);
});

test('Test Case 2', () => {
  const input = '';
  const expectedOutput = '';
  const result = longestPalindromicSubstring(input);
  expect(result).toBe(expectedOutput);
});

test('Test Case 3', () => {
  const input = 'a';
  const expectedOutput = 'a';
  const result = longestPalindromicSubstring(input);
  expect(result).toBe(expectedOutput);
});

test('Test Case 4', () => {
  const input = 'abcdefg';
  const expectedOutput = 'a';
  const result = longestPalindromicSubstring(input);
  expect(result).toBe(expectedOutput);
});

test('Test Case 5', () => {
  const input = 'aracecarracecarb';
  const expectedOutput = 'racecar';
  const result = longestPalindromicSubstring(input);
  expect(result).toBe(expectedOutput);
});
