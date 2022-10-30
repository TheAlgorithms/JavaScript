import litersToUSGallons from '../LitersToUSGallons'

test('Convert 50 liters to US gallons', () => {
  expect(parseFloat(litersToUSGallons(50).toFixed(2))).toBe(13.21)
})
