import litersToImperialGallons from '../LitersToImperialGallons'

test('Convert 25 liters to imperial gallons', () => {
  expect(parseFloat(litersToImperialGallons(25).toFixed(2))).toBe(5.5)
})
