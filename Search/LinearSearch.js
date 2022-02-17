/*
 * Linear search or sequential search is a method for finding a target
 * value within a list. It sequentially checks each element of the list
 * for the target value until a match is found or until all the elements
 * have been searched.
 */
function SearchArray (searchNum, ar, output = v => console.log(v)) {
  const position = Search(ar, searchNum)
  if (position !== -1) {
    output('The element was found at ' + (position + 1))
  } else {
    output('The element not found')
  }
}

// Search “theArray” for the specified “key” value
//Linear search
const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  const notFound = "Not Found";
  return notFound;
};
const result = linearSearch([1, 2, 3, 4, 5], 10);
console.log(result);

// const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// SearchArray(3, ar)
// SearchArray(4, ar)
// SearchArray(11, ar)


