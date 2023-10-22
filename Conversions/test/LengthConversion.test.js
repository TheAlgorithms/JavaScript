import { lengthConversion } from '../LengthConversion.js'

describe('LengthConversion', () => {
  it.each`
    length | fromUnit | toUnit    | expected
    ${10}  | ${'km'}  | ${'m'}    | ${10000}
    ${100} | ${'m'}   | ${'km'}   | ${0.1}
    ${5}   | ${'cm'}  | ${'mm'}   | ${50}
    ${12}  | ${'ft'}  | ${'inch'} | ${144.00000000000003}
  `(
    'converts $length $fromUnit to $toUnit',
    ({ length, fromUnit, toUnit, expected }) => {
      try {
        const result = lengthConversion(length, fromUnit, toUnit)
        expect(result).toBe(expected)
      } catch (error) {
        expect(error).toBeUndefined()
      }
    }
  )

  it.each`
    length  | fromUnit  | toUnit  | expected
    ${10}   | ${'m'}    | ${'km'} | ${0.01}
    ${1000} | ${'mm'}   | ${'cm'} | ${100}
    ${1}    | ${'inch'} | ${'ft'} | ${0.08333333333}
  `(
    'converts $length $fromUnit to $toUnit (vice versa)',
    ({ length, fromUnit, toUnit, expected }) => {
      try {
        const result = lengthConversion(length, fromUnit, toUnit)
        expect(result).toBeCloseTo(expected, 10) // Close comparison due to floating-point precision
      } catch (error) {
        expect(error).toBeUndefined()
      }
    }
  )

  it.each`
    length | fromUnit     | toUnit       | expectedError
    ${10}  | ${'km'}      | ${'invalid'} | ${'Invalid units'}
    ${5}   | ${'invalid'} | ${'m'}       | ${'Invalid units'}
  `(
    'returns error message for invalid units: $fromUnit to $toUnit',
    ({ length, fromUnit, toUnit, expectedError }) => {
      try {
        lengthConversion(length, fromUnit, toUnit)
      } catch (error) {
        expect(error.message).toBe(expectedError)
      }
    }
  )
})
