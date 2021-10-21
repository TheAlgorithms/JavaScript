import { meterToFeet, feetToMeter } from '../MeterToFeetConversion'

describe('Testing conversion of Meter to Feet', () => {
  it('with feet value', () => {
    expect(meterToFeet(30.48)).toBe(100)
  })
})

describe('Testing conversion of Feet to Meter', () => {
  it('with feet value', () => {
    expect(feetToMeter(10)).toBe(3.048)
  })
})
