/*
 * A simple helper function that checks, if the array is
 * sorted in ascending order.
 */
Array.prototype.isSorted = function () {

    let length = this.length;

    if (length < 2) {
        return true;
    }

    for (let i = 0; i < length - 1; i++) {
        if (this[i] > this[i + 1]) {
            return false;
        }
    }
    return true;
};

/*
 * A simple helper function to shuffle the array randomly in place.
 */
Array.prototype.shuffle = function () {

    for (let i = this.length - 1; i; i--) {
        let m = Math.floor(Math.random() * i);
        let n = this[i - 1];
        this[i - 1] = this[m];
        this[m] = n;
    }

};

/*
 * Implementation of the bogosort algorithm. This sorting algorithm randomly
 * rearranges the array until it is sorted.
 * For more information see: https://en.wikipedia.org/wiki/Bogosort
 */
function bogoSort(items) {

    while (!items.isSorted()) {
        items.shuffle()
    }
    return items;
}

//Implementation of bogoSort

var ar = [5, 6, 7, 8, 1, 2, 12, 14];
//Array before Sort
console.log(ar);
bogoSort(ar);
//Array after sort
console.log(ar);
