const HashTable = require('./HashTable');

test('Inserting and searching for values in the hashtable', () => {
  const hashtable = new HashTable();

  // Insert key-value pairs
  hashtable.insert("name", "Ambrish");
  hashtable.insert("age", 26);
  hashtable.insert("city", "India");

  // Search for values and expect them to be correct
  expect(hashtable.search("name")).toBe("Ambrish");
  expect(hashtable.search("age")).toBe(26);
  expect(hashtable.search("city")).toBe("India");

  // Search for a non-existent key and expect it to be undefined
  expect(hashtable.search("country")).toBeUndefined();
});

test('Removing values from the hashtable', () => {
  const hashtable = new HashTable();

  // Insert a key-value pair
  hashtable.insert("name", "Ambrish");

  // Remove the key-value pair and expect it to be undefined
  hashtable.remove("name");
  expect(hashtable.search("name")).toBeUndefined();
});

