/*
 * Cocktail shaker sort is a sort algorithm that is a bidirectional bubble sort
 * more information: https://en.wikipedia.org/wiki/Cocktail_shaker_sort
 * more information: https://en.wikipedia.org/wiki/Bubble_sort
 *
 */
function cocktailShakerSort(items) {

    for (var i = items.length - 1; i > 0; i--) {
        var swapped = false;
        var temp, j;

        // backwards
        for (j = 0; j > i; j--) {
            if (items[j] < items[j - 1]) {
                temp = items[j];
                items[j] = items[j - 1];
                items[j - 1] = temp;
                swapped = true;
            }
        }

        //forwards
        for (j = 0; j < i; j++) {
            if (items[j] > items[j + 1]) {
                temp = items[j];
                items[j] = items[j + 1];
                items[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) {
            return;
        }
    }
}

//Implementation of cocktailShakerSort

var ar = [5, 6, 7, 8, 1, 2, 12, 14];
//Array before Sort
console.log(ar);
cocktailShakerSort(ar);
//Array after sort
console.log(ar);