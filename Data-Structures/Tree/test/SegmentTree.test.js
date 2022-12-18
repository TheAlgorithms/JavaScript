import { SegmentTree } from '../SegmentTree'

describe('SegmentTree sum test', () => {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  const segment = new SegmentTree(a)

  it('init sum check', () => {
    expect(segment.query(0, 2)).toBe(6)
  })

  it('init sum check', () => {
    segment.update(2, 1)
    expect(segment.query(0, 2)).toBe(4)
  })
})
