import { SegmentTree } from '../SegmentTree'

describe('Segment Tree range sum with lazy propagation', () => {
  function bruteRangeSum(arr, l, r) {
    let s = 0
    for (let i = l; i <= r; i++) s += arr[i]
    return s
  }

  it('answers queries on static array', () => {
    const arr = [1, 2, 3, 4, 5]
    const st = new SegmentTree(arr)
    expect(st.rangeSum(0, 4)).toBe(15)
    expect(st.rangeSum(1, 3)).toBe(9)
    expect(st.rangeSum(2, 2)).toBe(3)
  })

  it('supports range updates and matches brute force', () => {
    const n = 100
    const arr = Array.from({ length: n }, () => Math.floor(Math.random() * 10))
    const st = new SegmentTree(arr.slice())

    for (let step = 0; step < 50; step++) {
      const l = Math.floor(Math.random() * n)
      const r = Math.floor(Math.random() * n)
      const ql = Math.min(l, r)
      const qr = Math.max(l, r)
      const add = Math.floor(Math.random() * 5) - 2

      st.updateRange(ql, qr, add)
      for (let i = ql; i <= qr; i++) arr[i] += add

      const L = Math.floor(Math.random() * n)
      const R = Math.floor(Math.random() * n)
      const qL = Math.min(L, R)
      const qR = Math.max(L, R)

      expect(st.rangeSum(qL, qR)).toBe(bruteRangeSum(arr, qL, qR))
    }
  })
})