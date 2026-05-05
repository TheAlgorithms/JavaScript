import { SkipList } from '../SkipList'

describe('SkipList', () => {
  it('starts empty', () => {
    const list = new SkipList()
    expect(list.size()).toBe(0)
    expect(list.isEmpty()).toBe(true)
    expect(list.search(1)).toBeUndefined()
    expect(list.has(1)).toBe(false)
  })

  it('inserts keys and tracks size', () => {
    const list = new SkipList()
    list.insert(3).insert(1).insert(2)
    expect(list.size()).toBe(3)
    expect(list.isEmpty()).toBe(false)
  })

  it('searches for inserted values', () => {
    const list = new SkipList()
    list.insert(1, 'one')
    list.insert(2, 'two')
    list.insert(3, 'three')
    expect(list.search(1)).toBe('one')
    expect(list.search(2)).toBe('two')
    expect(list.search(3)).toBe('three')
    expect(list.search(4)).toBeUndefined()
  })

  it('uses the key as default value when no value is given', () => {
    const list = new SkipList()
    list.insert(42)
    expect(list.search(42)).toBe(42)
  })

  it('updates the value when the same key is reinserted', () => {
    const list = new SkipList()
    list.insert(1, 'a')
    list.insert(1, 'b')
    expect(list.size()).toBe(1)
    expect(list.search(1)).toBe('b')
  })

  it('reports membership via has()', () => {
    const list = new SkipList()
    list.insert('apple')
    list.insert('banana')
    expect(list.has('apple')).toBe(true)
    expect(list.has('banana')).toBe(true)
    expect(list.has('cherry')).toBe(false)
  })

  it('deletes existing keys and leaves remaining ones intact', () => {
    const list = new SkipList()
    for (const k of [5, 1, 4, 2, 3]) list.insert(k)
    expect(list.delete(3)).toBe(true)
    expect(list.size()).toBe(4)
    expect(list.has(3)).toBe(false)
    expect([...list]).toEqual([1, 2, 4, 5])
  })

  it('returns false when deleting an absent key', () => {
    const list = new SkipList()
    list.insert(1)
    expect(list.delete(99)).toBe(false)
    expect(list.size()).toBe(1)
  })

  it('iterates keys in ascending order regardless of insertion order', () => {
    const list = new SkipList()
    for (const k of [10, 3, 7, 1, 4, 9, 2, 8, 6, 5]) list.insert(k)
    expect([...list]).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })

  it('yields [key, value] pairs via entries()', () => {
    const list = new SkipList()
    list.insert(2, 'b').insert(1, 'a').insert(3, 'c')
    expect(Array.from(list.entries())).toEqual([
      [1, 'a'],
      [2, 'b'],
      [3, 'c']
    ])
  })

  it('supports string keys with lexicographic ordering', () => {
    const list = new SkipList()
    for (const k of ['delta', 'alpha', 'charlie', 'bravo']) list.insert(k)
    expect([...list]).toEqual(['alpha', 'bravo', 'charlie', 'delta'])
  })

  it('handles a randomized stress workload against a reference set', () => {
    // Deterministic LCG so the test is reproducible.
    let state = 0x1234abcd
    const rand = () => {
      state = (state * 1103515245 + 12345) & 0x7fffffff
      return state / 0x80000000
    }

    const list = new SkipList({ random: rand })
    const reference = new Set()

    for (let i = 0; i < 500; i++) {
      const key = Math.floor(rand() * 200)
      const op = rand()
      if (op < 0.6) {
        list.insert(key)
        reference.add(key)
      } else {
        list.delete(key)
        reference.delete(key)
      }
    }

    const expected = [...reference].sort((a, b) => a - b)
    expect([...list]).toEqual(expected)
    expect(list.size()).toBe(reference.size)
    for (const k of expected) expect(list.has(k)).toBe(true)
  })

  it('rejects invalid constructor options', () => {
    expect(() => new SkipList({ maxLevel: 0 })).toThrow(RangeError)
    expect(() => new SkipList({ maxLevel: 1.5 })).toThrow(RangeError)
    expect(() => new SkipList({ p: 0 })).toThrow(RangeError)
    expect(() => new SkipList({ p: 1 })).toThrow(RangeError)
    expect(() => new SkipList({ random: 'nope' })).toThrow(TypeError)
  })

  it('respects a deterministic random source', () => {
    // Force every node to the highest reachable level.
    const list = new SkipList({ maxLevel: 4, p: 0.5, random: () => 0 })
    for (const k of [1, 2, 3, 4]) list.insert(k)
    expect(list.level).toBe(4)
    expect([...list]).toEqual([1, 2, 3, 4])

    // Force every node to level 0 (no promotions).
    const flat = new SkipList({ maxLevel: 4, p: 0.5, random: () => 0.99 })
    for (const k of [1, 2, 3, 4]) flat.insert(k)
    expect(flat.level).toBe(0)
    expect([...flat]).toEqual([1, 2, 3, 4])
  })
})
