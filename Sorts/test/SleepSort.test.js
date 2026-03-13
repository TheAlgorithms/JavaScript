import { sleepSort } from '../SleepSort.js'

describe('sleepSort', () => {
  it('should sort the array', async () => {
    const result = await sleepSort([5, 6, 7, 8, 1, 2, 12, 14])
    expect(result).toEqual([1, 2, 5, 6, 7, 8, 12, 14])
  })
})
