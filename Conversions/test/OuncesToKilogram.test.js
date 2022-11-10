import ouncesToKilograms from '../OuncesToKilograms'

test('Convert 60 ounces to kilograms', () => {
  expect(parseFloat(ouncesToKilograms(60).toFixed(3))).toBe(1.701)
})
