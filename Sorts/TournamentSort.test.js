import { tournamentSort } from './TournamentSort.js'

describe('Tournament Sort', () => {
  it('should sort an unsorted array', () => {
    expect(tournamentSort([5, 3, 1, 4, 2])).toEqual([1, 2, 3, 4, 5])
  })

  it('should handle an already sorted array', () => {
    expect(tournamentSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
  })

  it('should handle a reverse sorted array', () => {
    expect(tournamentSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
  })

  it('should handle a single element array', () => {
    expect(tournamentSort([42])).toEqual([42])
  })

  it('should handle an empty array', () => {
    expect(tournamentSort([])).toEqual([])
  })

  it('should handle duplicates', () => {
    expect(tournamentSort([3, 1, 2, 1, 3])).toEqual([1, 1, 2, 3, 3])
  })

  it('should handle negative numbers', () => {
    expect(tournamentSort([-3, 0, -1, 5, 2])).toEqual([-3, -1, 0, 2, 5])
  })
})
