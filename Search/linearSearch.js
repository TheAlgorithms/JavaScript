function SearchArray(searchNum, ar) {
  var position = Search(ar, searchNum);
  if (position != -1) {
    console.log("The element was found at " + (position + 1));
  } else {
    console.log("The element not found");
  }
}

// Search “theArray” for the specified “key” value
function Search(theArray, key) {
  for (var n = 0; n < theArray.length; n++)
    if (theArray[n] == key)
      return n;
  return -1;
}

var ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
SearchArray(3, ar);
SearchArray(4, ar);
SearchArray(11, ar);
