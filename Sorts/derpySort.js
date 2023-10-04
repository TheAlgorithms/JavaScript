// This sorting function called derpy randomly removes and re-adds elements in order

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
