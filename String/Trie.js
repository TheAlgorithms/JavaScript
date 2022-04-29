/**
A trie (a digital or prefix tree) is a string search algorithm
It is implemented using a nested object where each level has its direct children as keys.
A trie node can be formed by using an object to store the children.
The trie has a root node that is instantiated in the constructor of the Trie class, as shown.
*/
const TrieNode = function () {
  this.children = {}
  this.endOfWord = false
}
const Trie = function () {
  this.root = new TrieNode()
}
Trie.prototype.insert = function (word) {
  let current = this.root
  for (let i = 0; i < word.length; i++) {
    const ch = word.charAt(i)
    let node = current.children[ch]
    if (node === null) {
      node = new TrieNode()
      current.children[ch] = node
    }
    current = node
  }
  current.endOfWord = true
}
/*
To search inside a trie, each character of the word must be checked.
This is done by setting a temporary variable of current on the root.
The current variable is updated as each character in the word is checked.
*/
Trie.prototype.search = function (word) {
  let current = this.root
  for (let i = 0; i < word.length; i++) {
    const ch = word.charAt(i)
    const node = current.children[ch]
    if (node === null) {
      return false // node doesn't exist
    }
    current = node
  }
  return current.endOfWord
}
/*
To delete an element from a trie, the algorithm should traverse the root node until it reaches the last character of the word.
Then, for each node that does not have any other children, the node should be deleted.
The recursive implementation in the following code block implements this algorithm
*/
Trie.prototype.delete = function (word) {
  this.deleteRecursively(this.root, word, 0)
}
Trie.prototype.deleteRecursively = function (current, word, index) {
  if (index === word.length) {
    // when end of word is reached only delete if current.end Of Word is true.
    if (!current.endOfWord) {
      return false
    }
    current.endOfWord = false
    // if current has no other mapping then return true
    return Object.keys(current.children).length === 0
  }
  const ch = word.charAt(index)
  const node = current.children[ch]
  if (node === null) {
    return false
  }
  const canDeleteCurrentNode = this.deleteRecursively(node, word, index + 1)
  if (canDeleteCurrentNode) {
    delete current.children[ch]
    // return true if no mappings are left in the map.
    return Object.keys(current.children).length === 0
  }
  return false
}
export { Trie }
/*
const trie1 = new Trie()
trie1.insert("javascript")
trie1.insert("algthm")
trie1.search("algthm") // true
trie1.delete("javascript")
trie1.delete("algthm")
trie1.search("javascript") // false
console.log(trie1.search("algthm"))// false
*/
