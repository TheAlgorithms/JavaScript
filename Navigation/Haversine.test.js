import { haversineDistance } from './Haversine'

describe('Testing the haversine distance calculator', () => {
  it('Calculate distance', () => {
    const distance = haversineDistance(64.1265, -21.8174, 40.7128, -74.0060)
    expect(distance).toBe(4208198.758424171)
  })
  it('Test validation, expect throw', () => {
    expect(() => haversineDistance(64.1265, -21.8174, 40.7128, '74.0060')).toThrow()
  })
})
