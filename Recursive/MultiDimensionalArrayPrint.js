function printElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursive case: if the element is an array, go deeper
      printElements(arr[i])
    } else {
      // Base case: if the element is not an array, print it
      console.log(arr[i])
    }
  }
}
const multiDimensionalArray = [
  [1, 2, [3, 4]],
  [5, 6],
  [[7, 8], 9]
]

printElements(multiDimensionalArray)
