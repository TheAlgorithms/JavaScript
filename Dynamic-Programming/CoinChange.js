/**
 * @params {Array} coins
 * @params {Number} amount
 */
export const change = (coins, amount) => {
  // Create and initialize the storage
  const combinations = new Array(amount + 1).fill(0)
  combinations[0] = 1
  // Determine the direction of smallest sub-problem
  for (let i = 0; i < coins.length; i++) {
    // Travel and fill the combinations array
    for (let j = coins[i]; j < combinations.length; j++) {
      combinations[j] += combinations[j - coins[i]]
    }
  }
  return combinations[amount]
}
function minimumCoins (coins, amount) {
  // minimumCoins[i] will store the minimum coins needed for amount i
  const minimumCoins = new Array(amount + 1).fill(0)

  minimumCoins[0] = 0

  for (let i = 1; i < amount + 1; i++) {
    minimumCoins[i] = Number.MAX_SAFE_INTEGER
  }
  for (let i = 1; i < amount + 1; i++) {
    for (let j = 0; j < coins.length; j++) {
      const coin = coins[j]
      if (coin <= i) {
        const subRes = minimumCoins[i - coin]
        if (
          subRes !== Number.MAX_SAFE_INTEGER &&
          subRes + 1 < minimumCoins[i]
        ) {
          minimumCoins[i] = subRes + 1
        }
      }
    }
  }
  return minimumCoins[amount]
}
