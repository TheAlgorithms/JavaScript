import firstDuplicate from '../firstDuplicate'

describe('firstDuplicate test', function () {
  it('Returns -1 if there are no duplicates present', function () {
    const array = [1, 2, 3, 4, 5, 6]
    const result = firstDuplicate(array)
    expect(result).toEqual(-1)
  })

  it('Returns 3 when duplicate has minimal index', function () {
    const array = [5, 3, 6, 3, 5, 6]
    const result = firstDuplicate(array)
    expect(result).toEqual(3)
  })

  it('Returns "Javacript" when duplicate has minimal index', function () {
    const array = [
      'Python',
      'Ruby',
      'Javascript',
      'Rust',
      'Javascript',
      'Python'
    ]
    const result = firstDuplicate(array)
    expect(result).toEqual('Javascript')
  })

  it('Returns "Mary Jane" when an array of names is passed in', function () {
    const array = [
      'John Doe',
      'Mary Jane',
      'Chris Smith',
      'Mary Jane',
      'Chris Smith',
      'Bob Rogers'
    ]
    const result = firstDuplicate(array)
    expect(result).toEqual('Mary Jane')
  })

  it('Throws an error if non-array data type is passed in', function () {
    const string = 'Logan'
    expect(() => firstDuplicate(string)).toThrow('Invalid data type')
  })
})
