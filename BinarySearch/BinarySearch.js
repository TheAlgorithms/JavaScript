// What is a binary search?  https://pt.wikipedia.org/wiki/Pesquisa_bin%C3%A1ria

// Random Array sorted
const MyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// choosing the number to find
let number_to_find = 2;


// Create a function to search throught the Array 
const Search = (number_to_find, Array) => {
    
    // Inicialize two variables
    // The start of the array and the end
    let beginning = 0;
    let end = Array.length - 1;

    // Loop until the beginning <= end
    while (beginning <= end) {
        // Inicialize another variable, midle of the array
        let middle = Math.floor((beginning + end) / 2)
        
        // check if the middle is the number we are looking for
        if (Array[middle] == number_to_find) {
            // The number was found
            return true;
        }
        
        // check if the middle is lesser than number we are looking for
        else if (Array[middle] < number_to_find ) {
            beginning = middle + 1;
        }
        
        // The number is not equal neither lesser so it gotta be gratter
        else {
            end = middle - 1;
        }
    }
    
    // The number was not found
    return false;
}

// Calling the function and seeing the results (True if we can find the number and False if we don't)
console.log(Search(number_to_find, MyArray))
