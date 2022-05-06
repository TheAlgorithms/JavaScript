import { GetEuclidGCD } from '../GetEuclidGCD'

function testEuclidGCD (n, m, expected) {
  test('Testing on ' + n + ' and ' + m + '!', () => {
    expect(GetEuclidGCD(n, m)).toBe(expected)
  })
}

testEuclidGCD(5, 20, 5)
testEuclidGCD(109, 902, 1)
testEuclidGCD(290, 780, 10)
testEuclidGCD(104, 156, 52)
