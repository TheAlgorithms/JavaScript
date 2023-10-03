import {
  isTriangular,
  isTetrahedral,
  isPentatope,
  checkAll
} from '../FigurateNumber'

describe('FigurateNumber', () => {
  it('Triangular : should return true', () => {
    expect(isTriangular(1)).toEqual(true)
  })
  it('Triangular : should return true', () => {
    expect(isTriangular(3)).toEqual(true)
  })

  it('Triangular : should return false', () => {
    expect(isTriangular(5)).toEqual(false)
  })

  it('Triangular : should return true', () => {
    expect(isTriangular(171)).toEqual(true)
  })
  /** End */

  it('Tetrahedral : should return true', () => {
    expect(isTetrahedral(1)).toEqual(true)
  })
  it('Tetrahedral : should return true', () => {
    expect(isTetrahedral(4)).toEqual(true)
  })

  it('Tetrahedral : should return false', () => {
    expect(isTetrahedral(3)).toEqual(false)
  })

  it('Tetrahedral : should return true', () => {
    expect(isTetrahedral(165)).toEqual(true)
  })

  /** End */
  it('Pentatope : should return true', () => {
    expect(isPentatope(1)).toEqual(true)
  })
  it('Pentatope : should return true', () => {
    expect(isPentatope(5)).toEqual(true)
  })

  it('Pentatope : should return false', () => {
    expect(isPentatope(3)).toEqual(false)
  })

  it('Pentatope : should return true', () => {
    expect(isPentatope(1001)).toEqual(true)
  })
  /** End */

  it('Check All : should return all true', () => {
    expect(checkAll(1)).toEqual({
      isTriangular: true,
      isTetrahedral: true,
      isPentatope: true
    })
  })

  it('Check All : should return all true,true,false', () => {
    expect(checkAll(15)).toEqual({
      isTriangular: true,
      isTetrahedral: false,
      isPentatope: true
    })
  })
})
