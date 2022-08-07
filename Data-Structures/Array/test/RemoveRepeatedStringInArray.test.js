import { removeRepeatedStringFromArray } from '../RemoveRepeatedStringInArray'

describe('Testing the removeRepeatedStringFromArray function', () => {
  it('return array with no repeated string', () => {
    expect(removeRepeatedStringFromArray('A', 'D', 'B', 'A', 'C', 'B')).toEqual([ 'A', 'D', 'B', 'C' ])
    expect(removeRepeatedStringFromArray('apple', 'banana', 'apple', 'orange', 'coconut', 'coconut')).toEqual([ 'apple', 'banana', 'orange', 'coconut' ])
    expect(removeRepeatedStringFromArray('1', 'one', '2', 'two', '2', 'two')).toEqual([ '1', 'one', '2', 'two' ])
  })
})