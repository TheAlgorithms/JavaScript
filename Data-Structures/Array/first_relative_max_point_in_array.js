const findMaxPointIndex = (array, rangeStartIndex, rangeEndIndex, originalLength) => {
    const middleIndex = rangeStartIndex + parseInt((rangeEndIndex - rangeStartIndex) / 2);

    if ((middleIndex == 0 || array[middleIndex - 1] <= array[middleIndex]) &&
        (middleIndex == originalLength - 1 || array[middleIndex + 1] <= array[middleIndex])) {
        return middleIndex;
    }
    else if (middleIndex > 0 && array[middleIndex - 1] > array[middleIndex]) {
        return findMaxPointIndex(array, rangeStartIndex, (middleIndex - 1), originalLength);
    }
    else {
        return findMaxPointIndex(array, (middleIndex + 1), rangeEndIndex, originalLength);
    }
}

const LocalMaximomPoint = (A) => findMaxPointIndex(A, 0, A.length - 1, A.length);

const main = () => {

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
