function insertionSort() {
    /* Set up local vars */
    var temp, inner;
    /* Start at index 1, execute outer loop once per index from 1 to the last index */
    for (var outer = 1; outer <= this.dataStore.length - 1; ++outer) {
        /* Store the value at the current index */
        temp = this.dataStore[outer];
        /* Set up temporary index to decrement until we find where this value should be */
        inner = outer;
        /* As long as 'inner' is not the first index, and 
        there is an item in our array whose index is less than 
        inner, but whose value is greater than our temp value... */ 
        while (inner > 0 && (this.dataStore[inner-1] >= temp)) {
            /* Swap the value at inner with the larger value */
            this.dataStore[inner] = this.dataStore[inner-1];
            /* Decrement inner to keep moving down the array */
            --inner;
        }
        /* Finish sorting this value */
        this.dataStore[inner] = temp;
    }
    console.log(this.toString());
}
