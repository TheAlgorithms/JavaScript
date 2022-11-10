import { logTwo } from '../LogTwo'

for (let i = 1; i < 100; i++) {
  test('log2(' + i + ')', () => {
    expect(logTwo(i)).toBe(Math.floor(Math.log2(i)))
  })
}
