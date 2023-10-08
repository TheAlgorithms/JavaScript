import { cocktailShakerSort } from '../CocktailShakerSort'

describe('CocktailShakerSort', () => {
  it('should sort arrays correctly', () => {
    expect(cocktailShakerSort([5, 4, 1, 2, 3])).toEqual([1, 2, 3, 4, 5])
    expect(cocktailShakerSort([1, 2, 3])).toEqual([1, 2, 3])
    expect(cocktailShakerSort([5, 6, 7, 8, 1, 2, 12, 14])).toEqual([
      1, 2, 5, 6, 7, 8, 12, 14
    ])
  })

  it('should work for empty arrays, too', () => {
    expect(cocktailShakerSort([])).toEqual([])
  })
})
