import basicPrefixSum from '../BasicPrefixSum'  

describe('basicPrefixSum', () => {
  it('computes correct prefix sums for normal arrays', () => {
    expect(basicPrefixSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10])
    expect(basicPrefixSum([0, 0, 0])).toEqual([0, 0, 0])
    expect(basicPrefixSum([-1, 5, -3])).toEqual([-1, 4, 1])
    expect(basicPrefixSum([100])).toEqual([100]) // single element array
  })

  it('returns an empty array for empty input', () => {
    expect(basicPrefixSum([])).toEqual([])
  })

  it('throws TypeError for invalid inputs', () => {
    expect(() => basicPrefixSum('not an array')).toThrow(TypeError)
    expect(() => basicPrefixSum([1, 2, 'x'])).toThrow(TypeError)
    expect(() => basicPrefixSum([{}, 3])).toThrow(TypeError)
    expect(() => basicPrefixSum(null)).toThrow(TypeError)
    expect(() => basicPrefixSum(undefined)).toThrow(TypeError)
  })
})