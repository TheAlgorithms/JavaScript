import { sphereSurfaceArea } from '../sphereSurfaceArea'

describe('SphereArea', () => {
  it('should return the sphere surface area given the radius', () => {
    const res = sphereSurfaceArea(3)
    expect(res).toEqual(113.1)
  })
})
