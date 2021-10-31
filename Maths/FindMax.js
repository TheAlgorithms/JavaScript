/**
 * Function to find the maximum number given an array of integers
 * Returns the maximum number of the array
 * If the array is empty it returns the string 'Array is empty'
 */

export const findMax = (arr) => {
    if (arr.length === 0)
        return 'Array is empty'

    let max = arr[0]
    arr.forEach(element =>{
      if (element > max){
        max = element
      }
    })
    return max
<<<<<<< HEAD
}
=======
}
>>>>>>> 7ae8d92c904e3991a3c19779d50fb8f936bbe3a7
