//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
//The code creates a Map named map1 and sets key-value pairs ('a': 1, 'b': 2, 'c': 3). It 
//retrieves and logs the value associated with key 'a', then updates it to 97. It logs the map's 
//size (number of pairs) before and after deleting key 'b'. Expected output: 1, 97, 3, 2.

const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b');

console.log(map1.size);
// Expected output: 2
