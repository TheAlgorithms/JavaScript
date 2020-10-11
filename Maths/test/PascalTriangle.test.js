import { generate } from '../PascalTriangle'

describe('Pascals Triangle', () => {
  it('should have the the same length as the number', () => {
    const pascalsTriangle = generate(5)
    expect(pascalsTriangle.length).toEqual(5)
  })
  it('should have same length as its index in the array', () => {
    const pascalsTriangle = generate(5)
    pascalsTriangle.forEach((arr, index) => {
      expect(arr.length).toEqual(index + 1)
    })
  })
  it('should return an array of arrays', () => {
    const pascalsTriangle = generate(3)
    expect(pascalsTriangle).toEqual(
      expect.arrayContaining([[1], [1, 1], [1, 2, 1]])
    )
  })
})
