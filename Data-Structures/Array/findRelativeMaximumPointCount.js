const DoesMaximumPoint = (array, index) => {
    if(index == 0) {
        return array[index] > array[index + 1];
    } else if(index == array.length - 1) {
        return array[index] > array[index - 1];
    } else {
        return array[index] > array[index + 1] && array[index] > array[index - 1];
    }
}

const CountMaximumPoints = (array, startIndex, endIndex) => {
    if(startIndex == endIndex) {
        return DoesMaximumPoint(array, startIndex) ? 1 : 0;
    }
    
    let middleIndex = parseInt((startIndex + endIndex) / 2);
    return CountMaximumPoints(array, startIndex, middleIndex) + 
        CountMaximumPoints(array, middleIndex + 1, endIndex);
}

const NumberOfLocalMaximomPoints = (A) => CountMaximumPoints(A, 0, A.length - 1);

const main = () => {

    const arraySize = 100

    // Initial empty array
    const A = [];

    // Push Random numbers while not repeating into the array
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
    
    // Print array
    console.log(JSON.stringify(A))
    
    // Main program
    console.log("Number of the maximum local points is " + NumberOfLocalMaximomPoints(A));
}

main();
