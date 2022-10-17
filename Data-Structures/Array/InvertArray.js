/* https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/ here explains ways to solve this problem in other languages */
const invertArr = (arr) => {
    let temp = 0
    for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) { // LIMIT SPECIFIES THE AMOUNT OF INVERT ACTIONS
      temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    return arr
  }
  export { invertArr }
  