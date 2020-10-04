/** 
  *  @function Timsort is a hybrid stable sorting algorithm, derived from merge sort and insertion sort, 
  *  designed to perform well on many kinds of real-world data. 
  *  It was implemented by Tim Peters in 2002 for use in the Python programming language.
  *  It is also used to sort arrays of non-primitive type in Java SE 7, 
  *  on the Android platform, in GNU Octave, on V8, Swift and Rust.
  *  1) It sorts small partitions using Insertion Sort.
  *  2) Merges the partition using Merge Sort.
  *  @see [Timsort](https://en.wikipedia.org/wiki/Timsort) 
  *  @param {Array} array
  */

function Timsort(array) {
    // Default size of a partition
    const RUN = 32
    const n = array.length
    // Sorting the partitions using Insertion Sort
    for (let i = 0; i < n; i += RUN) {
        InsertionSort(array, i, Math.min(i + RUN - 1, n - 1))
    }
    for (let size = RUN; size < n; size *= 2) {
        for (let left = 0; left < n; left += 2 * size) {
            let mid = left + size - 1;
            let right = Math.min(left + 2 * size - 1, n - 1);
            Merge(array, left, mid, right)
        }
    }
}

/**
 * @function performs insertion sort on the partition
 * @param {Array} array array to be sorted
 * @param {Number} left left index of partiton
 * @param {Number} right right index of partition
 */

function InsertionSort(array, left, right) {
    const n = array.length;
    for (let i = left + 1; i <= right; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= left && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
}

/**
 * @function merges two sorted partitions
 * @param {Array} array array to be sorted
 * @param {Number} left left index of partition
 * @param {Number} mid mid index of partition
 * @param {Number} right right index of partition
 */

function Merge(array, left, mid, right) {
    if(mid >= right) return;
    const n = array.length;
    let len1 = mid - left + 1;
    let len2 = right - mid;
    let larr = Array(len1);
    let rarr = Array(len2);
    for(let i = 0; i < len1; i++)
    {
        larr[i] = array[left + i];
    }
    for(let i = 0; i < len2; i++)
    {
        rarr[i] = array[mid + 1 + i];
    }
    let i = 0, j = 0, k = left;
    while (i < larr.length && j < rarr.length) {
        if (larr[i] < rarr[j]) {
            array[k++] = larr[i++];
        }
        else {
            array[k++] = rarr[j++];
        }
    }
    while (i < larr.length) {
        array[k++] = larr[i++];
    }
    while (j < rarr.length) {
        array[k++] = rarr[j++];
    }
}

(/**
 * @example Test of Timsort functions.
 * Data is randomly generated.
 * Prints "RIGHT" if it works as expected, 
 * otherwise "FAULTY"
 */
    function demo() {
        let size = 1000000;
        let data = Array(size)
        for(let i = 0; i < size; i++)
        {
            data[i] = Math.random() * Number.MAX_SAFE_INTEGER;
        }
        let isSorted = function (array) {
            const n = array.length
            for (let i = 0; i < n - 1; i++) {
                if (array[i] > array[i + 1]) return false;
            }
            return true;
        }
        Timsort(data);
        if (isSorted(data)) {
            console.log("RIGHT");
        }
        else {
            console.log("FAULTY");
        }
    }
)();