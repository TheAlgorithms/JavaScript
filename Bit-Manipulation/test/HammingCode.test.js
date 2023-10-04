import { HammingCode } from '../HammingCode'

describe.each([
  { inputVal:Number(117), expectedVal: 5 },
  { inputVal:parseInt(0x9F9,16), expectedVal: 7 },
  { inputVal:parseInt(0x889193,16), expectedVal: 10 },
  { inputVal:10043091, expectedVal: 14},
  { inputVal:parseInt("1101110",2), expectedVal: 5 },
  { inputVal:parseInt(1101110,2), expectedVal: 5 }
])('Resulting hamming code conversion from $inputVal', ({inputVal, expectedVal}) => {
  test(`returns bit count = ${expectedVal}`, () => {
    expect(HammingCode(inputVal)).toBe(expectedVal)
  })
})
