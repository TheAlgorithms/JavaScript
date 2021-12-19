/*
  In computing, natural sort order (or natural sorting) is the ordering of strings in alphabetical order, 
  except that multi-digit numbers are treated atomically, i.e., as if they were a single character. Natural sort order 
  has been promoted as being more human-friendly ("natural") than machine-oriented, pure alphabetical sort order.[1]
  
  For example, in alphabetical sorting, "z11" would be sorted before "z2" because the "1" in the first string is sorted as smaller 
  than "2", while in natural sorting "z2" is sorted before "z11" because "2" is treated as smaller than "11".

  Alphabetical sorting:
  1.z11 
  2.z2

  Natural sorting:
  1. z2
  2. z11

  https://en.wikipedia.org/wiki/Natural_sort_order
  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare

  P.S. use this function, as there are a lot of implementations on the stackoverflow and other forums, but many of them don't work correctly (can't pass all my tests)

*/

const alphaNumericalSort = (a, b) => {
  return a.localeCompare(b, undefined,{ numeric: true })
};

export { alphaNumericalSort }