/*
 * Gnome sort is a sort algorithm that moving an element to its proper place is accomplished by a series of swap
 * more information: https://en.wikipedia.org/wiki/Gnome_sort
 *
 */
export function gnomeSort(items) {
  if (items.length <= 1) {
    return
  }

  let i = 1

  while (i < items.length) {
    if (items[i - 1] <= items[i]) {
      i++
    } else {
      ;[items[i], items[i - 1]] = [items[i - 1], items[i]]

      i = Math.max(1, i - 1)
    }
  }
  return items
}

// Implementation of gnomeSort

// const ar = [5, 6, 7, 8, 1, 2, 12, 14]
// gnomeSort(ar)
