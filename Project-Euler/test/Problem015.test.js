import { latticePath } from '../Problem015.js'

describe('Lattice Paths', () => {
  test('if grid size is 2', () => {
    expect(latticePath(2)).toBe(6)
  })
  test('if grid size is 5', () => {
    expect(latticePath(5)).toBe(252)
  })
  test('if grid size is 10', () => {
    expect(latticePath(10)).toBe(184756)
  })
  test('if grid size is 15', () => {
    expect(latticePath(15)).toBe(155117520)
  })
  test('if grid size is 16', () => {
    expect(latticePath(16)).toBe(601080390)
  })
  test('if grid size is 17', () => {
    expect(latticePath(17)).toBe(2333606220)
  })
  test('if grid size is 18', () => {
    expect(latticePath(18)).toBe(9075135300)
  })
  test('if grid size is 19', () => {
    expect(latticePath(19)).toBe(35345263800)
  })
  // Project Euler Condition Check
  test('if grid size is 20', () => {
    expect(latticePath(20)).toBe(137846528820)
  })
})
