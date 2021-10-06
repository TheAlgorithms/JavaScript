import { radianToDegree } from '../RadianToDegree'

test('should convert radian to degree:', () => {
  const degreeEqual = radianToDegree(0)
  expect(degreeEqual).toBe(0)
})

test('should convert radian to degree:', () => {
  const degreeEqual = radianToDegree(Math.PI / 4)
  expect(degreeEqual).toBe(45)
})

test('should convert radian to degree:', () => {
  const degreeEqual = radianToDegree(Math.PI / 2)
  expect(degreeEqual).toBe(90)
})

test('should convert radian to degree:', () => {
  const degreeEqual = radianToDegree(Math.PI)
  expect(degreeEqual).toBe(180)
})
