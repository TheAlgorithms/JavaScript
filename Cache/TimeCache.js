/* The TimeCache class is a JavaScript class that allows you to store key-value pairs in a cache with
an optional expiration time. */
class TimeCache {
    constructor(expirationTime) {
      this.cache = new Map()
      this.expirationTime = expirationTime
    }
  
    set(key, value, keyExpirationTime = false) {
      let expiration
      if (
        this.expirationTime < keyExpirationTime ||
        keyExpirationTime === false
      ) {
        expiration = Date.now() + this.expirationTime
      } else {
        expiration = Date.now() + keyExpirationTime
      }
      this.cache.set(key, { value, expiration })
    }
  
    get(key) {
      const cacheItem = this.cache.get(key)
      if (!cacheItem) {
        return null
      }
      const { value, expiration } = cacheItem
      if (expiration && Date.now() > expiration) {
        this.delete(key)
        return null
      }
      return value
    }
  
    delete(key) {
      this.cache.delete(key)
    }
}
  
export default TimeCache
