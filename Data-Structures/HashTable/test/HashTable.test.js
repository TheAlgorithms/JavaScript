import HashTable from '../HashTable.js'

describe('HashTable Data Structure Tests', () => {
  test('HashTable Constructor', () => {
    const hashTable = new HashTable(10)
    expect(hashTable.limit).toBe(10)
    expect(hashTable.storage.length).toBe(10)
  })

  test('HashTable get method', () => {
    const hashTable = new HashTable(10)
    expect(hashTable.get('key')).toBe(undefined)
  })

  test('HashTable set method', () => {
    const hashTable = new HashTable(10)
    hashTable.set('js', 'javascript')
    expect(hashTable.get('js')).toBe('javascript')
  })

  test('HashTable remove method', () => {
    const hashTable = new HashTable(10)
    hashTable.set('js', 'javascript')
    hashTable.remove('js')
    expect(hashTable.get('js')).toBe(undefined)
  })

  test('HashTable has method', () => {
    const hashTable = new HashTable(10)
    hashTable.set('js', 'javascript')
    expect(hashTable.has('js')).toBe(true)
  })

  test('HashTable clear method', () => {
    const hashTable = new HashTable(10)
    hashTable.set('js', 'javascript')
    hashTable.set('ts', 'typescript')
    hashTable.clear()
    expect(hashTable.get('js')).toBe(undefined)
    expect(hashTable.get('ts')).toBe(undefined)
    expect(hashTable.storage).toEqual(new Array(10))
  })
})
