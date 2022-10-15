import { gcd } from '../GreatestCommonDenominator'

test("GreatestCommonDenominator", () => {
  expect(gcd(28,42)).toBe(14);
  expect(gcd(6,9)).toBe(3);
  expect(gcd(45,15)).toBe(15);
  expect(gcd(350,420)).toBe(70);
})