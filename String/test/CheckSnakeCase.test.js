import { checkSnakeCase } from '../CheckSnakeCase'
describe('checkSnakeCase', () => {
  it('expect to throw an error if input is not a string', () => {
    expect(() => checkSnakeCase(0)).toThrow()
  })

  it('expects to return true if the input is in snake case format', () => {
    const value = 'docker_build'
    const result = checkSnakeCase(value)
    expect(result).toBe(true)
  })

  it('expects to return false if the input is not in snake case format', () => {
    const value = 'dockerBuild'
    const result = checkSnakeCase(value)
    expect(result).toBe(false)
  })
})
