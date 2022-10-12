/*
 * Patience Sort is a sorting algorithm inspired by, and named after, the card game patience.
 * more information: https://en.wikipedia.org/wiki/Patience_sorting
 */

export function patienceSort (items) {
  const piles = []

  for (let i = 0; i < items.length; i++) {
    const num = items[i]
    const destinationPileIndex = piles.findIndex(
      (pile) => num >= pile[pile.length - 1]
    )
    if (destinationPileIndex === -1) {
      piles.push([num])
    } else {
      piles[destinationPileIndex].push(num)
    }
  }

  for (let i = 0; i < items.length; i++) {
    let destinationPileIndex = 0
    for (let p = 1; p < piles.length; p++) {
      const pile = piles[p]
      if (pile[0] < piles[destinationPileIndex][0]) {
        destinationPileIndex = p
      }
    }
    const distPile = piles[destinationPileIndex]
    items[i] = distPile.shift()
    if (distPile.length === 0) {
      piles.splice(destinationPileIndex, 1)
    }
  }

  return items
}
