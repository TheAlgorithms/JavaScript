const fc = require('../kadaneAlgo')
test('test1', () => {
  expect(fc.kadaneAlgo([1, 2, 3, 4, 5])).toBe(15)
})

test('test2', () => {
  expect(fc.kadaneAlgo([-1, -2, -3, -4, 5])).toBe(5)
})
