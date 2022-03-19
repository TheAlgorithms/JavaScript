import { RGBToHex } from '../RGBToHex'

test('The Hex format of RGB (225, 225, 225) is #ffffff', () => {
  const res = RGBToHex(255, 255, 255)
  expect(res).toBe('#ffffff')
})

test('The Hex format of RGB (190, 108, 217) is #be6cd9', () => {
  const res = RGBToHex(190, 108, 217)
  expect(res).toBe('#be6cd9')
})

test('The Hex format of RGB (255, 99, 71) is #ff6347', () => {
  const res = RGBToHex(255, 99, 71)
  expect(res).toBe('#ff6347')
})

test('The Hex format of RGB (100, 108, 217) is #646cd9', () => {
  const res = RGBToHex(100, 108, 217)
  expect(res).toBe('#646cd9')
})
