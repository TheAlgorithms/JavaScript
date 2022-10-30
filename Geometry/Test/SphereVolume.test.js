import { sphereVolume } from '../SphereVolume'

describe('SphereVolume', () => {
  it('should return the sphere volume given the radius', () => {
    const res = sphereVolume(3)
    expect(res).toEqual(113.1)
  })
})
