export default class HashTable {
  constructor(limit = 100) {
    // Initialize the storage and limit variables
    this.storage = new Array(limit)
    this.limit = limit
  }

  // Hash function:
  _hash(key, max) {
    // Initialize the hash variable to 0
    let hash = 0
    // Iterate through the key and add the character code at each iteration to the hash variable
    for (let i = 0; i < key.length; i++) hash += key.charCodeAt(i)
    // Return the hash modulo the max
    return hash % max
  }

  // Insert a key-value pair into the hash table
  set(key, value) {
    // Hash the key
    const index = this._hash(key, this.limit)
    // If the index is empty, insert the key-value pair and create a bucket
    if (this.storage[index] === undefined) this.storage[index] = [[key, value]]
    else {
      //  If the index is not empty, iterate through the bucket (collision handling)
      let inserted = false
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          // If the key exists, update the value
          this.storage[index][i][1] = value
          inserted = true
        }
      }
      // If the key does not exist, insert the key-value pair
      if (inserted === false) this.storage[index].push([key, value])
    }
  }

  // Get a value from the hash table
  get(key) {
    // Hash the key
    const index = this._hash(key, this.limit)
    // If the index is empty, return undefined
    if (this.storage[index] === undefined) return undefined
    else {
      // If the index is not empty, iterate through the bucket
      for (let i = 0; i < this.storage[index].length; i++) {
        // If the key exists, return the value
        if (this.storage[index][i][0] === key) return this.storage[index][i][1]
      }
    }
  }

  // Remove a key-value pair from the hash table
  remove(key) {
    // Hash the key
    const index = this._hash(key, this.limit)
    // Check if the bucket exists
    if (this.storage[index]) {
      // If the key matches the key at the index and there is only one item in the bucket, delete the bucket
      if (
        this.storage[index].length === 1 &&
        this.storage[index][0][0] === key
      ) {
        delete this.storage[index]
      } else {
        // If the index is not empty, iterate through the bucket
        for (let i = 0; i < this.storage[index].length; i++) {
          // If the key exists, delete the key-value pair
          if (this.storage[index][i][0] === key) delete this.storage[index][i]
        }
      }
    }
  }

  // Check if a key exists in the hash table
  has(key) {
    // Hash the key to find the index
    const index = this._hash(key, this.limit)
    // Check if the bucket at the index exists
    if (this.storage[index]) {
      // Iterate through the bucket's key-value pairs
      for (let i = 0; i < this.storage[index].length; i++) {
        // Compare the current key with the target key and if the key is found, return true
        if (this.storage[index][i][0] === key) return true
      }
    }
    // If the key is not found, return false
    return false
  }

  // Print all keys/values in the table
  printTable() {
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i] !== undefined)
        console.log(`Bucket ${i}: ${JSON.stringify(this.storage[i])}`)
      else console.log(`Bucket ${i} Empty`)
    }
  }

  // Clear all key/values
  clear() {
    this.storage = new Array(this.limit)
  }
}
