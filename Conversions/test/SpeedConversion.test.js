import { convertSpeed } from '../SpeedConversion'

describe('Speed Unit Conversions', () => {
  it('100 km/h to m/s', () => {
    expect(convertSpeed(100, 'km/h', 'm/s')).toBe(27.778, 3)
  })

  it('100 km/h to mph', () => {
    expect(convertSpeed(100, 'km/h', 'mph')).toBe(62.137, 3)
  })

  it('100 km/h to knot', () => {
    expect(convertSpeed(100, 'km/h', 'knot')).toBe(53.996, 3)
  })

  it('100 m/s to km/h', () => {
    expect(convertSpeed(100, 'm/s', 'km/h')).toBe(360.0, 3)
  })

  it('100 m/s to mph', () => {
    expect(convertSpeed(100, 'm/s', 'mph')).toBe(223.694, 3)
  })

  it('100 m/s to knot', () => {
    expect(convertSpeed(100, 'm/s', 'knot')).toBe(194.384, 3)
  })

  it('100 mph to km/h', () => {
    expect(convertSpeed(100, 'mph', 'km/h')).toBe(160.934, 3)
  })

  it('100 mph to m/s', () => {
    expect(convertSpeed(100, 'mph', 'm/s')).toBe(44.704, 3)
  })

  it('100 mph to knot', () => {
    expect(convertSpeed(100, 'mph', 'knot')).toBe(86.898, 3)
  })

  it('100 knot to km/h', () => {
    expect(convertSpeed(100, 'knot', 'km/h')).toBe(185.2, 3)
  })

  it('100 knot to m/s', () => {
    expect(convertSpeed(100, 'knot', 'm/s')).toBe(51.444, 3)
  })

  it('100 knot to mph', () => {
    expect(convertSpeed(100, 'knot', 'mph')).toBe(115.078, 3)
  })
})
