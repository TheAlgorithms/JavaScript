import { zellersCongruenceAlgorithm } from '../ZellersCongruenceAlgorithm'

function testZeller (day, month, year, expected) {
  test('Testing on ' + day + '/' + month + '/' + year, () => {
    expect(zellersCongruenceAlgorithm(day, month, year)).toBe(expected)
  })
}

test('Testing on this/should/throw', () => {
  expect(() => {
    zellersCongruenceAlgorithm('this', 'should', 'error')
  }).toThrowError(new TypeError('Arguments are not all numbers.'))
})
testZeller(25, 1, 2013, 'Friday')
testZeller(26, 1, 2013, 'Saturday')
testZeller(16, 4, 2022, 'Saturday')
testZeller(25, 4, 2022, 'Monday')
