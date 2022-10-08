import { catalanNumbers } from '../CatalanNumbers'

describe('Testing catalanNumbers function', () => {
  it('should return the expected array for the input: 0', () => {
    const input = 0
    const expectedOutput = [1]
    expect(catalanNumbers(input)).toStrictEqual(expectedOutput)
  })
  it('should return the expected array for the input: 1', () => {
    const input = 1
    const expectedOutput = [1, 1]
    expect(catalanNumbers(input)).toStrictEqual(expectedOutput)
  })
  it('should return the expected array for the input: 2', () => {
    const input = 2
    const expectedOutput = [1, 1, 2]
    expect(catalanNumbers(input)).toStrictEqual(expectedOutput)
  })
  it('should return the expected array for the input: 3', () => {
    const input = 3
    const expectedOutput = [1, 1, 2, 5]
    expect(catalanNumbers(input)).toStrictEqual(expectedOutput)
  })
  it('should return the expected array for the input: 4', () => {
    const input = 4
    const expectedOutput = [1, 1, 2, 5, 14]
    expect(catalanNumbers(input)).toStrictEqual(expectedOutput)
  })
  it('should return the expected array for the input: 5', () => {
    const input = 5
    const expectedOutput = [1, 1, 2, 5, 14, 42]
    expect(catalanNumbers(input)).toStrictEqual(expectedOutput)
  })
  it('should return the expected array for the input: 6', () => {
    const input = 6
    const expectedOutput = [1, 1, 2, 5, 14, 42, 132]
    expect(catalanNumbers(input)).toStrictEqual(expectedOutput)
  })
  it('should return the expected array for the input: 7', () => {
    const input = 7
    const expectedOutput = [1, 1, 2, 5, 14, 42, 132, 429]
    expect(catalanNumbers(input)).toStrictEqual(expectedOutput)
  })
  it('should return the expected array for the input: 8', () => {
    const input = 8
    const expectedOutput = [1, 1, 2, 5, 14, 42, 132, 429, 1430]
    expect(catalanNumbers(input)).toStrictEqual(expectedOutput)
  })
  it('should return the expected array for the input: 9', () => {
    const input = 9
    const expectedOutput = [1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862]
    expect(catalanNumbers(input)).toStrictEqual(expectedOutput)
  })
  it('should return the expected array for the input: 10', () => {
    const input = 10
    const expectedOutput = [1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862, 16796]
    expect(catalanNumbers(input)).toStrictEqual(expectedOutput)
  })
  it('should return the expected array for the input: 20', () => {
    const input = 20
    const expectedOutput = [
      1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862, 16796, 58786, 208012, 742900,
      2674440, 9694845, 35357670, 129644790, 477638700, 1767263190, 6564120420
    ]
    expect(catalanNumbers(input)).toStrictEqual(expectedOutput)
  })
})
