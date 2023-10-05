/* HashTable Search: https://en.wikipedia.org/wiki/Hash_table
 *
 * A hashtable, also known as a hash table or hash map, is a data structure that allows you to store and retrieve values using a key. 
 * It is an efficient way to implement a dictionary-like data structure where you can quickly access values based on their associated keys. 
 * Hashtable search involves using the key to locate the corresponding value in the hashtable.
 */

class HashTable {
    constructor() {
      this.table = {};
    }
  
    // Function to hash the key
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash;
    }
  
    // Function to insert a key-value pair into the hashtable
    insert(key, value) {
      const index = this.hash(key);
      this.table[index] = value;
    }
  
    // Function to search for a value by key
    search(key) {
      const index = this.hash(key);
      return this.table[index];
    }
  
    // Function to remove a key-value pair from the hashtable
    remove(key) {
      const index = this.hash(key);
      if (this.table[index]) {
        delete this.table[index];
      }
    }
  }
  
  module.exports = HashTable;