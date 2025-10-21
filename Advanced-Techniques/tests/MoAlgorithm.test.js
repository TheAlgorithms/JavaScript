import { MoAlgorithm, Query, UniqueElementsCounter } from '../MoAlgorithm.js'
import { describe, it, expect } from 'vitest'

describe('MoAlgorithm', () => {
  it('should process range queries correctly', () => {
    const arr = [1, 2, 3, 2, 1, 4, 5]
    // right is exclusive: to cover indices 0..2 use right=3, 1..4 use right=5, 2..5 use right=6
    const queries = [new Query(0, 3, 0), new Query(1, 5, 1), new Query(2, 6, 2)]

    const counter = new UniqueElementsCounter()
    const processor = new MoAlgorithm(
      arr,
      queries,
      (element) => counter.addElement(element),
      (element) => counter.removeElement(element),
      () => counter.getResult()
    )

    const results = processor.processQueries()
    expect(results).toEqual([3, 3, 4])
  })

  it('should handle empty array', () => {
    const arr = []
    const queries = [new Query(0, 0, 0)]
    const counter = new UniqueElementsCounter()
    const processor = new MoAlgorithm(
      arr,
      queries,
      counter.addElement.bind(counter),
      counter.removeElement.bind(counter),
      counter.getResult.bind(counter)
    )

    const results = processor.processQueries()
    expect(results).toEqual([0])
  })
})
