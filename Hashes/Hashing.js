<script> 
	// HashTable Implementation 
	class HashTable { 
		constructor() { 
			this.table = new Array(10); 
			this.size = 0; 
		} 
	
		// private function to convert key to index 
		// _ shows that the function is private 
		_setKey(key) { 
			return key % 10; 
		} 
	
		// insert value in the hashtable 
		insert(value) { 
			const index = this._setKey(value); 
			this.table[index] = value; 
			this.size++; 
		} 
	
		get(key) { 
			const target = this._setKey(key); 
			return this.table[target]; 
		} 
	
		search(value) { 
			const index = this._setKey(value); 
			if (this.table[index] == value) 
				console.log("The value is found at index : ", index); 
			else
				console.log("Not found"); 
		} 
	
		delete(key) { 
			const index = this._setKey(key); 
	
			if (this.table[index]) { 
				this.table[index] = []; 
				this.size--; 
				return true; 
			} else { 
				return false; 
			} 
		} 
	} 
	
	const hashExample = new HashTable(); 
	// insert 
	hashExample.insert(100); 
	hashExample.insert(87); 
	hashExample.insert(86); 
	hashExample.insert(12); 
	hashExample.insert(9); 
	
	
	console.log(hashExample.table); // -> shows the hash table 
	
	// search 
	hashExample.search(87); // found 
	hashExample.search(10); // not found 
	
	// delete 
	hashExample.delete(12); 
	
	// showing table after deletion 
	console.log(hashExample.table); 
	
</script>
