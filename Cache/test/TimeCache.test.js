import TimeCache from '../TimeCache'
describe('TimeCache', () => {
  let timeCache

  beforeEach(() => {
    timeCache = new TimeCache()
  })

  it('should set and get a value from the cache', () => {
    timeCache.set('key', 'value')
    expect(timeCache.get('key')).toBe('value')
  })

  it('should delete a value from the cache', () => {
    timeCache.set('key', 'value')
    timeCache.delete('key')
    expect(timeCache.get('key')).toBeNull()
  })

  it('should return null for a non-existent key', () => {
    expect(timeCache.get('non-existent-key')).toBeNull()
  })

  it('should return null for an expired key', (done) => {
    timeCache.set('key', 'value', Date.now() - 500)
    setTimeout(() => {
      expect(timeCache.get('key')).toBeNull()
      done()
    }, 1000)
  })

  it('should return null for an expired key with a default expiration time', (done) => {
    timeCache = new TimeCache(500)
    timeCache.set('key', 'value')
    setTimeout(() => {
      expect(timeCache.get('key')).toBeNull()
      done()
    }, 1000)
  })

  it('should return null for an expired key with a custom expiration time', (done) => {
    timeCache.set('key', 'value', 500)
    setTimeout(() => {
      expect(timeCache.get('key')).toBeNull()
      done()
    }, 1000)
  })

  it('should return null for an expired key with a custom expiration time that is less than the default expiration time', (done) => {
    timeCache = new TimeCache(5000)
    timeCache.set('key', 'value', 1000)
    setTimeout(() => {
      expect(timeCache.get('key')).toBeNull()
      done()
    }, 2000)
  })

  it('should return null for an expired key with a custom expiration time that is greater than the default expiration time', (done) => {
    timeCache = new TimeCache(1000)
    timeCache.set('key', 'value', 5000)
    setTimeout(() => {
      expect(timeCache.get('key')).toBeNull()
      done()
    }, 2000)
  })
})
