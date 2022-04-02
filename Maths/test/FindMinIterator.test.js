import { FindMinIterator } from '../FindMinIterator'

describe('FindMinIterator', () => {
  test('given empty array then min is undefined', () => {
    expect(FindMinIterator([])).toBeUndefined()
  })

  test('given single value array then min is found', () => {
    expect(FindMinIterator([1])).toBe(1)
    expect(FindMinIterator([-1])).toBe(-1)
    expect(FindMinIterator([0])).toBe(0)
  })

  test('given array then min is found', () => {
    expect(FindMinIterator([1, 2])).toBe(1)
    expect(FindMinIterator([-1, 10])).toBe(-1)
    expect(FindMinIterator([0, 100])).toBe(0)
    expect(FindMinIterator([100, 0])).toBe(0)
    expect(FindMinIterator([100, 50, 20, 0, -100, 0, 2, 30, 45, 99, 104, 23])).toBe(-100)
  })

  test('given empty generator then min is undefined', () => {
    const src = function* () { } // eslint-disable-line
    expect(FindMinIterator(src())).toBeUndefined()
  })

  test('given generator then min is found', () => {
    const src = function* () { // eslint-disable-line
      yield 1
      yield -1
      yield 0
    }
    expect(FindMinIterator(src())).toBe(-1)
  })

  test('given string generator then min string length is found', () => {
    const src = function* () { // eslint-disable-line
      yield 'abc'
      yield 'de'
      yield 'qwerty'
    }
    expect(FindMinIterator(src(), _x => _x.length)).toBe(2)
  })

  test('given array of objects then min accessor is found', () => {
    const array = [
      { name: 'Item #1', price: 1.0 },
      { name: 'Item #2', price: 0.0 },
      { name: 'Item #3', price: -1.0 }
    ]
    expect(FindMinIterator(array, _x => _x.price)).toBe(-1)
    expect(FindMinIterator(array, _x => _x.name)).toBe('Item #1')
  })
})
