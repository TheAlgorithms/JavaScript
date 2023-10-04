import { HammingCode } from '../HammingCode'

test('checks HammingCode of 1110101 hex converted is 5', () => {
  const code = HammingCode(parseInt("1110101",16));
  expect(code).toBe(5);
});

test('checks HammingCode of 10043091 hex converted is 7', () => {
  const code = HammingCode(parseInt("10043091",16));
  expect(code).toBe(7);
});

test('checks HammingCode of 889193 hex converted is 9', () => {
  const code = HammingCode(parseInt("889193",16));
  expect(code).toBe(9);
});

test('checks HammingCode of 1110101 hex converted is 5', () => {
  const code = HammingCode(parseInt("1101110",2));
  expect(code).toBe(5);
});

test('checks HammingCode of 1101110 is 5', () => {
  const code = HammingCode(1101110);
  expect(code).toBe(5);
});

test('checks HammingCode of 0x10043091 is 7', () => {
  const code = HammingCode(0x10043091);
  expect(code).toBe(7);
});

test('checks HammingCode of 0x8891930311 is NaN (above range)', () => {
  const code = HammingCode(0x8891930311);
  expect(code).toBeNaN();
});

test('checks HammingCode of the Number 100 is 3', () => {
  const code = HammingCode((Number(100));
  expect(code).toBe(3);
});
