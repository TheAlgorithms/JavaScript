import { getNextElementaryGeneration } from '../Elementary'

describe('Elementary Cellular Automata', () => {
  describe('Rule Errors', () => {
    it('Correct', () => {
      expect(() => getNextElementaryGeneration([0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], 128)).not.toThrow()
    })

    it('Less than 0', () => {
      expect(() => getNextElementaryGeneration([0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], -1)).toThrow()
    })

    it('Greater than 255', () => {
      expect(() => getNextElementaryGeneration([0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], 256)).toThrow()
    })

    it('Decimal', () => {
      expect(() => getNextElementaryGeneration([0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], 100.4)).toThrow()
    })
  })

  describe('Rule 54 Iterations', () => {
    it('Generation 1', () => {
      expect(getNextElementaryGeneration([0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], 54)).toEqual([0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0])
    })
    it('Generation 2', () => {
      expect(getNextElementaryGeneration([0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0], 54)).toEqual([0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0])
    })
    it('Generation 3', () => {
      expect(getNextElementaryGeneration([0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0], 54)).toEqual([0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0])
    })
    it('Generation 4', () => {
      expect(getNextElementaryGeneration([0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0], 54)).toEqual([0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0])
    })
  })

  describe('Rule 222 Iterations', () => {
    it('Generation 1', () => {
      expect(getNextElementaryGeneration([0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], 222)).toEqual([0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0])
    })
    it('Generation 2', () => {
      expect(getNextElementaryGeneration([0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0], 222)).toEqual([0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0])
    })
    it('Generation 3', () => {
      expect(getNextElementaryGeneration([0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0], 222)).toEqual([0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0])
    })
    it('Generation 4', () => {
      expect(getNextElementaryGeneration([0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0], 222)).toEqual([0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0])
    })
  })

  describe('Rule 60 Iterations', () => {
    it('Generation 1', () => {
      expect(getNextElementaryGeneration([0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], 60)).toEqual([0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0])
    })
    it('Generation 2', () => {
      expect(getNextElementaryGeneration([0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0], 60)).toEqual([0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0])
    })
    it('Generation 3', () => {
      expect(getNextElementaryGeneration([0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0], 60)).toEqual([0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])
    })
    it('Generation 4', () => {
      expect(getNextElementaryGeneration([0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0], 60)).toEqual([0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0])
    })
  })

  describe('Rule 90 Iterations', () => {
    it('Generation 1', () => {
      expect(getNextElementaryGeneration([0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], 90)).toEqual([0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0])
    })
    it('Generation 2', () => {
      expect(getNextElementaryGeneration([0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], 90)).toEqual([0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0])
    })
    it('Generation 3', () => {
      expect(getNextElementaryGeneration([0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0], 90)).toEqual([0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0])
    })
    it('Generation 4', () => {
      expect(getNextElementaryGeneration([0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0], 90)).toEqual([0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0])
    })
  })

  describe('Rule 30 Iterations', () => {
    it('Generation 1', () => {
      expect(getNextElementaryGeneration([0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], 30)).toEqual([0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0])
    })
    it('Generation 2', () => {
      expect(getNextElementaryGeneration([0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0], 30)).toEqual([0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0])
    })
    it('Generation 3', () => {
      expect(getNextElementaryGeneration([0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0], 30)).toEqual([0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0])
    })
  })
})
