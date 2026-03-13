import { introsort } from '../IntroSort'

describe('introsort', () => {
  it('should have a robust default comparator', () => {
    // toString, null, undefined
    const mixedData = [undefined, '2', 1, false, null, { a: 7 }]
    introsort(mixedData)
    expect(mixedData).toEqual([1, '2', { a: 7 }, false, null, undefined])

    // Symbol
    expect(() => introsort([Symbol(), Symbol()])).toThrowError()
  })

  it('fails gracefully', () => {
    introsort('string')
    introsort([])
    introsort(['one len'])
    introsort([1, 2, 3], 'string')
  })

  it('should sort randomly generated data', function demo1() {
    // make array
    const data = []
    const size = 10_000
    for (let i = 0; i < size; i++) {
      const temp = Math.random() * Number.MAX_SAFE_INTEGER
      data.push(temp)
    }

    // custom comparator
    const c = function (a, b) {
      return a - b
    }
    introsort(data, c)

    // check that all numbers are smaller than the one after them
    let faulty = false
    for (let i = 1; i < size; i++) {
      if (data[i - 1] > data[i]) {
        faulty = true
        break
      }
    }

    expect(faulty).toEqual(false)
  })

  it('should match the sorting of Array.sort()', function demo2() {
    // make arrays
    const data = []
    const data2 = []
    const size = 10_000
    for (let i = 0; i < size; i++) {
      const temp = Math.random() * Number.MAX_SAFE_INTEGER
      data.push(temp)
      data2.push(temp)
    }

    // sort
    introsort(data)
    data2.sort()

    // verify
    let faulty = false
    for (let i = 0; i < size; i++) {
      if (data[i] !== data2[i]) {
        faulty = true
        break
      }
    }

    expect(faulty).toEqual(false)
  })
})
