import { degreeToRadian } from '../DegreeToRadian'

test('should convert degree to radian:', () => {
  const radianEqual = degreeToRadian(0)
  expect(radianEqual).toBe(0)
})

test('should convert degree to radian:', () => {
  const radianEqual = degreeToRadian(45)
  expect(radianEqual).toBe(Math.PI / 4)
})

test('should convert degree to radian:', () => {
  const radianEqual = degreeToRadian(90)
  expect(radianEqual).toBe(Math.PI / 2)
})

test('should convert degree to radian:', () => {
  const radianEqual = degreeToRadian(180)
  expect(radianEqual).toBe(Math.PI)
})
