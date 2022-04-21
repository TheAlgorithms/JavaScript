import { factorialize } from '../WhileLoopFactorial'

function testFactorial(n, expected) {
  test('Testing on ' + n + '!', () => {
    expect(factorialize(n)).toBe(expected)
  })
}

testFactorial(3, 6)
testFactorial(7, 5040)
testFactorial(0, 1)
testFactorial(12, 479001600)
