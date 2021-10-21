/**
 * [LocalMaxima](https://www.geeksforgeeks.org/find-indices-of-all-local-maxima-and-local-minima-in-an-array/) is an algorithm to find relative bigger numbers compared to their neighbors
 *
 * Notes:
 * - works by using divide and conquer
 * - the function gets the array A with n Real numbersand returns the local max point index (if more than one exists return the first one)
 *
 * @complexity: O(log(n)) (on average )
 * @complexity: O(log(n)) (worst case)
 * @flow
 */

const findMaxPointIndex = (array, rangeStartIndex, rangeEndIndex, originalLength) => {
    
    // find index range middle point
    const middleIndex = rangeStartIndex + parseInt((rangeEndIndex - rangeStartIndex) / 2);

    // handle array bounds
    if ((middleIndex === 0 || array[middleIndex - 1] <= array[middleIndex]) &&
        (middleIndex === originalLength - 1 || array[middleIndex + 1] <= array[middleIndex])) {
        return middleIndex;
    }
    else if (middleIndex > 0 && array[middleIndex - 1] > array[middleIndex]) {
        return findMaxPointIndex(array, rangeStartIndex, (middleIndex - 1), originalLength);
    }
    else {
        // regular local max
        return findMaxPointIndex(array, (middleIndex + 1), rangeEndIndex, originalLength);
    }
}

const LocalMaximomPoint = (A) => findMaxPointIndex(A, 0, A.length - 1, A.length);

const main = () => {

    // test with random 100 cells array
    const arraySize = 100

    // Initial empty array
    const A = [];

    // Push Random numbers while not repeating previous numbers in the array
    do {
        // Generating random number
        const randomNumber = Math
            .floor(Math.random() * arraySize) + 1

        // Pushing into the array only 
        // if the array does not contain it
        if (!A.includes(randomNumber)) {
            A.push(randomNumber);
        }

    } while (A.length < arraySize);
    
    // Print array for debugging purposes
    console.log(JSON.stringify(A))
    
    // Main program
    console.log("Index of the maximum local point is " + LocalMaximomPoint(A));
}

main();
