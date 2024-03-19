function possibleNums(array, targetValue) {
   const numbersArray = [];
   // nested loops to find the sum as target value
   for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
         if (array[i] + array[j] === targetValue) {
            numbersArray.push([array[i], array[j]]);
         }
      }
   }
   return numbersArray;
}
const array = [1, 2, 3, 4, 5, 6, 7];
const targetValue = 7;
const numbersArray = possibleNums(array, targetValue);
console.log(numbersArray);
