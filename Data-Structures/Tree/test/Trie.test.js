import { Trie } from '../Trie.js'

describe('Trie', () => {
  describe('Constructor', () => {
    it('should create an empty trie', () => {
      const trie = new Trie()
      expect(trie.root.key).toBe(null)
      expect(trie.root.parent).toBe(null)
      expect(trie.root.count).toBe(0)
      expect(Object.keys(trie.root.children)).toHaveLength(0)
    })
  })

  describe('insert', () => {
    it('should insert words correctly', () => {
      const trie = new Trie()
      trie.insert('hello')
      trie.insert('world')
      trie.insert('hello')

      expect(trie.contains('hello')).toBe(true)
      expect(trie.contains('world')).toBe(true)
      expect(trie.findOccurrences('hello')).toBe(2)
    })

    it('should handle empty string insertion', () => {
      const trie = new Trie()
      trie.insert('')
      expect(trie.contains('')).toBe(true)
      expect(trie.findOccurrences('')).toBe(1)
    })

    it('should not insert non-string values', () => {
      const trie = new Trie()
      trie.insert(123)
      trie.insert(null)
      trie.insert(undefined)
      trie.insert({})

      trie.insert('valid')
      expect(trie.contains('valid')).toBe(true)
    })
  })

  describe('contains', () => {
    it('should return true for existing words', () => {
      const trie = new Trie()
      trie.insert('test')
      trie.insert('testing')

      expect(trie.contains('test')).toBe(true)
      expect(trie.contains('testing')).toBe(true)
    })

    it('should return false for non-existing words', () => {
      const trie = new Trie()
      trie.insert('test')

      expect(trie.contains('tes')).toBe(false)
      expect(trie.contains('testing')).toBe(false)
      expect(trie.contains('')).toBe(false)
    })

    it('should handle prefix that is not a complete word', () => {
      const trie = new Trie()
      trie.insert('programming')

      expect(trie.contains('program')).toBe(false)
      expect(trie.contains('programming')).toBe(true)
    })
  })

  describe('findOccurrences', () => {
    it('should return correct occurrence count', () => {
      const trie = new Trie()
      trie.insert('apple')
      trie.insert('apple')
      trie.insert('app')

      expect(trie.findOccurrences('apple')).toBe(2)
      expect(trie.findOccurrences('app')).toBe(1)
      expect(trie.findOccurrences('ap')).toBe(0)
    })

    it('should return 0 for non-existing words', () => {
      const trie = new Trie()
      expect(trie.findOccurrences('nonexistent')).toBe(0)
    })
  })

  describe('remove', () => {
    it('should remove words correctly', () => {
      const trie = new Trie()
      trie.insert('hello')
      trie.insert('hello')
      trie.insert('hello')

      trie.remove('hello', 2)
      expect(trie.findOccurrences('hello')).toBe(1)

      trie.remove('hello')
      expect(trie.findOccurrences('hello')).toBe(0)
    })

    it('should handle removing more occurrences than exist', () => {
      const trie = new Trie()
      trie.insert('test')

      trie.remove('test', 5)
      expect(trie.findOccurrences('test')).toBe(0)
    })

    it('should not remove if count is invalid', () => {
      const trie = new Trie()
      trie.insert('test')

      trie.remove('test', 0)
      expect(trie.findOccurrences('test')).toBe(1)

      trie.remove('test', -1)
      expect(trie.findOccurrences('test')).toBe(1)
    })

    it('should handle empty string removal', () => {
      const trie = new Trie()
      trie.insert('')
      trie.insert('')

      trie.remove('', 1)
      expect(trie.findOccurrences('')).toBe(1)
    })
  })

  describe('findAllWords', () => {
    it('should find all words with given prefix', () => {
      const trie = new Trie()
      trie.insert('cat')
      trie.insert('category')
      trie.insert('caterpillar')
      trie.insert('dog')
      trie.insert('cattle')

      const words = trie.findAllWords('cat')
      expect(words).toHaveLength(4)
      expect(words).toEqual(
        expect.arrayContaining([
          { word: 'cat', count: 1 },
          { word: 'category', count: 1 },
          { word: 'caterpillar', count: 1 },
          { word: 'cattle', count: 1 }
        ])
      )
    })

    it('should return empty array for non-existing prefix', () => {
      const trie = new Trie()
      trie.insert('hello')

      expect(trie.findAllWords('world')).toEqual([])
    })

    it('should return words with correct counts', () => {
      const trie = new Trie()
      trie.insert('test')
      trie.insert('test')
      trie.insert('testing')

      const words = trie.findAllWords('test')
      expect(words).toEqual(
        expect.arrayContaining([
          { word: 'test', count: 2 },
          { word: 'testing', count: 1 }
        ])
      )
    })
  })

  describe('findPrefix', () => {
    it('should return node for existing prefix', () => {
      const trie = new Trie()
      trie.insert('hello')

      const node = trie.findPrefix('hell')
      expect(node).not.toBeNull()
      expect(node.key).toBe('l')
    })

    it('should return null for non-existing prefix', () => {
      const trie = new Trie()
      trie.insert('hello')

      expect(trie.findPrefix('world')).toBeNull()
    })

    it('should return null for non-string input', () => {
      const trie = new Trie()
      expect(trie.findPrefix(123)).toBeNull()
    })
  })

  describe('integration tests', () => {
    it('should handle complex operations', () => {
      const trie = new Trie()

      const words = ['apple', 'application', 'app', 'banana', 'band']
      words.forEach((word) => trie.insert(word))

      words.forEach((word) => {
        expect(trie.contains(word)).toBe(true)
      })

      const appWords = trie.findAllWords('app')
      expect(appWords).toHaveLength(3)

      trie.remove('app')
      expect(trie.contains('app')).toBe(false)
      expect(trie.contains('apple')).toBe(true)

      trie.insert('apple')
      expect(trie.findOccurrences('apple')).toBe(2)
    })
  })
})
