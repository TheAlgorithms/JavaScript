/*
https://en.wikipedia.org/wiki/Pigeonhole_sort

*Pigeonhole sorting is a sorting algorithm that is suitable
* for sorting lists of elements where the number of elements
* (n) and the length of the range of possible key values (N)
* are approximately the same.
 */
function pigeonhole_sort(arr){
    var min = arr[0];
    var max = arr[0];

    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] > max)
            max = arr[i];
        if(arr[i] < min)
            min = arr[i];
    }
    console.log(max);
    console.log(min);

    var range = max - min + 1;
    let pigeonhole = Array(range).fill(0);

    for(let i = 0; i<arr.length; i++){
        pigeonhole[arr[i] - min]++;
    }

    let index = 0;

    for(let j = 0; j<range; j++){
        while(pigeonhole[j]-->0){
            arr[index++]=j+min;
        }

    }
}
//Driver code
var arr=Array(8, 3, 2, 7, 4, 6, 8);
pigeonhole_sort(arr);
console.log(arr);

