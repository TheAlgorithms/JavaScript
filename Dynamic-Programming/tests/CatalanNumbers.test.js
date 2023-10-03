import { catalanNumbers } from '../CatalanNumbers'

describe('Testing catalanNumbers function', () => {
  test('should return the expected array for inputs from 0 to 20', () => {
    const expectedOutput = [
      1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862, 16796, 58786, 208012, 742900,
      2674440, 9694845, 35357670, 129644790, 477638700, 1767263190, 6564120420
    ]

    for (let i = 0; i <= 20; i++) {
      expect(catalanNumbers(i)).toStrictEqual(expectedOutput.slice(0, i + 1))
    }
  })
})
