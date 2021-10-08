import { checkCamelCase } from '../CheckCamelCase'
describe('checkCamelCase', () => {
  it('expect to throw an error if input is not a string', () => {
    expect(() => checkCamelCase(null)).toThrow()
  })

  it('expects to return true if the input is in camel case format', () => {
    const value = 'dockerBuild'
    const result = checkCamelCase(value)
    expect(result).toBe(true)
  })

  it('expects to return false if the input is not in camel case format', () => {
    const value = 'docker_build'
    const result = checkCamelCase(value)
    expect(result).toBe(false)
  })
})
