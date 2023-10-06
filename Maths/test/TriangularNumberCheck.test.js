import { TriangularNumberCheck } from '../TriangularNumberCheck'

describe.each([
  { inputVal:55, expectedVal:10 },
  { inputVal:45, expectedVal:9 },
  { inputVal:190, expectedVal:19 },
  { inputVal:66, expectedVal:11 },
  { inputVal:666, expectedVal:36 },
  { inputVal:6, expectedVal:3 },
  { inputVal:10, expectedVal:4 },
  { inputVal:1, expectedVal:1 },
])('If the number of $inputVal is triangular', ({inputVal, expectedVal}) => {
  test(`should return ${expectedVal}`, () => {
    expect(TriangularNumberCheck(inputVal)).toBe(expectedVal)
  })
})

describe.each([
  { inputVal:-1, expectedVal:-1 },
  { inputVal:-10, expectedVal:-1 },
  { inputVal:-9, expectedVal:-1 },
  { inputVal:"foo", expectedVal:-1 },
  { inputVal:"fizz", expectedVal:-1 }, 
])('If the number of $inputVal is completely wrong or negative', ({inputVal, expectedVal}) => {
  test(`should return ${expectedVal}`, () => {
    expect(TriangularNumberCheck(inputVal)).not.toBeLessThan(-1)
  })
})

describe.each([
  { inputVal:4183059834009, expectedVal:0 },
  { inputVal:69, expectedVal:0 },
  { inputVal:0, expectedVal:0 },
  { inputVal:23, expectedVal:0 }
])('If the number of $inputVal is NOT triangular', ({inputVal, expectedVal}) => {
  test(`should return ${expectedVal}`, () => {
    expect(TriangularNumberCheck(inputVal)).toBe(0)
  })
})
