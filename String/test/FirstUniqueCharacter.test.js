import { firstUniqChar } from '../FirstUniqueCharacter'

describe('firstUniqChar', () => {
  it('locates the index of first unique character in the string', () => {
    expect(firstUniqChar('javascript')).toEqual(0)
    expect(firstUniqChar('sesquipedalian')).toEqual(3)
    expect(firstUniqChar('aabb')).toEqual(-1)
  })
})
