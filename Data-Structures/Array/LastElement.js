/*
  *[getLastElement](https://www.freecodecamp.org/news/how-to-get-the-last-item-in-an-array-in-javascript/#:~:text=To%20get%20the%20last%20item%20in%20an%20array%20when%20you,holds%20the%20value%20of%20horse.)
  Notes:-
    -Two Methods for finding Last element in array
      1.Use index positioning
        - This Method Only Useful if we know the length of array
        - Example
          const myArray = [1, 2, 3, 4, 5];
          console.log(myArray[4]);
        - Since here we now the length of array we simply print it last element.
      2.Array length Method
        - Here we only use arr.length method to find last element
        - .length method provide size of array 
        - after that we simply console.log(arr[arr.length-1])
    
  *@complexity: O(1) (on average )
  *@complexity: O(1) (worst case)
*/
const getLastElement = (arr) => {
  if (arr.length === 0) {
    return undefined // Return undefined for an empty array
  }
  return arr[arr.length - 1]
}



export { getLastElement }
