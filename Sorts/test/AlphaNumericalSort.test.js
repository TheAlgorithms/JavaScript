import { alphaNumericalSort } from '../AlphaNumericalSort'

describe('alphaNumericalComparer', () => {
  test('given array of eng symbols return correct sorted array', () => {
    const src = ['b', 'a', 'c']
    src.sort(alphaNumericalSort)
    expect(src).toEqual(['a', 'b', 'c'])
  })

  test('given array of numbers return correct sorted array', () => {
    const src = ['15', '0', '5']
    src.sort(alphaNumericalSort)
    expect(src).toEqual(['0', '5', '15'])
  })

  test('correct sort with numbers and strings', () => {
    const src = ['3', 'a1b15c', 'z', 'a1b14c']
    src.sort(alphaNumericalSort)
    expect(src).toEqual(['3', 'a1b14c', 'a1b15c', 'z'])
  })

  test('correct sort with long numbers', () => {
    const src = ['abc999999999999999999999999999999999cba', 'abc999999999999999999999999999999990cba', 'ab']
    src.sort(alphaNumericalSort)
    expect(src).toEqual(['ab', 'abc999999999999999999999999999999990cba', 'abc999999999999999999999999999999999cba'])
  })

  test('correct sort with z prefix', () => {
    const src = ['z', 'abc003def', 'abc1def', 'a']
    src.sort(alphaNumericalSort)
    expect(src).toEqual(['a', 'abc1def', 'abc003def', 'z'])
  })

  test('correct sort with other language', () => {
    const src = ['а10б', 'а2б', 'в10г', 'в05г']
    src.sort(alphaNumericalSort)
    expect(src).toEqual(['а2б', 'а10б', 'в05г', 'в10г'])
  })
})
