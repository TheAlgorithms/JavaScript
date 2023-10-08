import { hexStringToRGB } from '../HexToRGB'

test('The RGB form of Hex String E1E1E1 is {r: 225, g: 225, b: 225}', () => {
  const res = hexStringToRGB('E1E1E1')
  expect(res).toEqual({ r: 225, g: 225, b: 225 })
})

test('The RGB form of Hex String 000000 is {r: 0, g: 0, b: 0}', () => {
  const res = hexStringToRGB('000000')
  expect(res).toEqual({ r: 0, g: 0, b: 0 })
})

test('The RGB form of Hex String 6CE1CD is {r: 108, g: 225, b: 205}', () => {
  const res = hexStringToRGB('6CE1CD')
  expect(res).toEqual({ r: 108, g: 225, b: 205 })
})
