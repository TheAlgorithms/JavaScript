import { gridGetX, gridGetY } from '../GridGet'

describe('GridGet', () => {
  it('should have a value of x for the 27th element if the square array has 400 elements', () => {
    expect(gridGetX(Math.sqrt(400), 27)).toEqual(8)
  })
  it('should have a value of x for the 11th element if the square array has 7 columns and 3 rows', () => {
    expect(gridGetX(7, 11)).toEqual(5)
  })
  it('should have a value of y for the 27th element if the square array has 400 elements', () => {
    expect(gridGetY(Math.sqrt(400), 27)).toEqual(2)
  })
  it('should have a value of y for the 11th element if the square array has 7 columns and 3 rows ', () => {
    expect(gridGetX(7, 11)).toEqual(5)
  })
})
