import { CountSetBits } from '../CountSetBits'

test('CountSetBits', () => {
  const tests = {
    // binary representation: set bits
    25: 3,
    36: 2,
    16: 1,
    58: 4,
    0: 0
  }
  for (const binary in tests) {
    expect(CountSetBits(binary)).toBe(tests[binary])
  }
})
