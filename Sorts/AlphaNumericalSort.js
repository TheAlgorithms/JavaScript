/*
  alpha numerical sort = Natural sort order 
  https://en.wikipedia.org/wiki/Natural_sort_order
*/

const alphaNumericalSort = (a, b) => {
  return a.localeCompare(b, undefined,{ numeric: true })
};

export { alphaNumericalSort }