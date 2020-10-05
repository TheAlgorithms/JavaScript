/**
 * @function
 * Gnome sort is a sort algorithm that moving an element to its proper place is accomplished by a series of swap
 * @see [GnomeSort](https://en.wikipedia.org/wiki/Gnome_sort)
 * @param {Array} items array to be sorted
 */
function gnomeSort (items) {
  if (items.length <= 1) {
    return
  }

  let i = 1

  while (i < items.length) {
    if (items[i - 1] <= items[i]) {
      i++
    } else {
      [items[i], items[i - 1]] = [items[i - 1], items[i]]

      i = Math.max(1, i - 1)
    }
  }
}

(
  /**
   * @example Demo function
   */
  function demo () {
    const ar = [5, 6, 7, 8, 1, 2, 12, 14]
    console.log(ar)
    gnomeSort(ar)
    console.log(ar)
  }
)()
