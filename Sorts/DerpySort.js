/* Derpy Sort is an algorithm to randomly sort an array. It
 * randomly removes and re-adds elements in an array.

 * The big O on the Derpy Sort is O(N).
 * 
 * In the Derpy Sort, we iterate through the length of the array and select a random 
 * index. We then remove the element associated with that index and re-add it to the
 * end of the array. After the length of the array has been iterated through, the 
 * function then returns the resulting array.
 * 
 * This sorting function is impractical and does not provide any purpose other than 
 * creating a jumbled mess.
*/

function derpySort(arr) {

    let sorted = [];
    let length = arr.length;

    while (length > 0) {

        // Get a random index from the array
        let randomIndex = Math.floor(Math.random() * length);

        // Remove the element
        let element = arr.splice(randomIndex, 1)[0];
        
        // Add it back into the array
        sorted.push(element); // Add the element to the sorted array
        
        length--;

    }

    return sorted;
    
}


let unsortedArray = [42, 17, 8, 99, 23, 54];

console.log("Original Array: " + unsortedArray);

let sortedArray = derpySort(unsortedArray);

console.log("Derpy Sorted Array: " + sortedArray);
