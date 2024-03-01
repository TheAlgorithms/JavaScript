export default class HashTable {
  constructor(limit = 100) {
    this.storage = new Array(limit)
    this.limit = limit
  }

  _hash(key, max) {
    let hash = 0
    for (let i = 0; i < key.length; i++) hash += key.charCodeAt(i)
    return hash % max
  }

  set(key, value) {
    const index = this._hash(key, this.limit)
    if (this.storage[index] === undefined) this.storage[index] = [[key, value]]
    else {
      let inserted = false
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value
          inserted = true
        }
      }
      if (inserted === false) this.storage[index].push([key, value])
    }
  }

  // Get a value from the hash table
  get(key) {
    const index = this._hash(key, this.limit)
    if (this.storage[index] === undefined) return undefined
    else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) return this.storage[index][i][1]
      }
    }
  }

  remove(key) {
    const index = this._hash(key, this.limit)
    if (this.storage[index]) {
      if (
        this.storage[index].length === 1 &&
        this.storage[index][0][0] === key
      ) {
        delete this.storage[index]
      } else {
        for (let i = 0; i < this.storage[index].length; i++) {
          if (this.storage[index][i][0] === key) delete this.storage[index][i]
        }
      }
    }
  }

  has(key) {
    const index = this._hash(key, this.limit)
    if (this.storage[index]) {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) return true
      }
    }
    return false
  }

  printTable() {
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i] !== undefined)
        console.log(`Bucket ${i}: ${JSON.stringify(this.storage[i])}`)
      else console.log(`Bucket ${i} Empty`)
    }
  }

  clear() {
    this.storage = new Array(this.limit)
  }
}
