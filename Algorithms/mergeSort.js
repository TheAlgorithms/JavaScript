var mergeSort = function(array, from, to) {
    if(to > from) {
        var middle = Math.floor( (from+to)/2 ); // Arithmetic mean
        mergeSort(array, from, middle);
        mergeSort(array, middle+1, to);
        merge(array, from, middle, to);
    }
};
