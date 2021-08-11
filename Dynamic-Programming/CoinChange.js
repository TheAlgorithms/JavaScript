function change (coins, amount) {
  const combinations = new Array(amount + 1).fill(0)
  combinations[0] = 1

  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i]

    for (let j = coin; j < amount + 1; j++) {
      combinations[j] += combinations[j - coin]
    }
  }
  return combinations[amount]
}

/** Coin-change combination using recursive approach along with Memoization
 * @param {number} amount
 * @param {number[]} coins
 */
const changeRecursive = (amount, coins) => {
  const mem = new Map()
  return coinChangeComb(amount, coins, 0, mem)
}
/** Coin-change combination using recursive approach along with Memoization
 * @param {number} amount
 * @param {number[]} coins
 * @param {number} idx
 * @param {Map} mem
 */

const coinChangeComb = (amount, coins, idx, mem) => {
  // Negative Base Case
  if (amount < 0 || idx === coins.length) {
    return 0
  }
  // Positive Base Case
  if (amount === 0) {
    return 1
  }

  // Main Case
  // Check if the recursive function call results is already memoized
  if (mem.has(`${amount} - ${idx}`)) {
    return mem.get(`${amount} - ${idx}`)
  }
  let res = 0
  // Consider the coin at index idx
  res += coinChangeComb(amount - coins[idx], coins, idx, mem)
  // Leave the coin at index idx
  res += coinChangeComb(amount, coins, idx + 1, mem)
  // Cache the intermediate result in mem
  mem.set(`${amount} - ${idx}`, res)
  return res
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

function main () {
  const amount = 12
  const coins = [2, 4, 5]
  console.log(
    'Number of combinations of getting change for ' +
      amount +
      ' is: ' +
      change(coins, amount)
  )
  console.log(
    'Number of combinations of getting change for ' +
      amount +
      ' is: ' +
      changeRecursive(coins, amount)
  )
  console.log(
    'Minimum number of coins required for amount :' +
      amount +
      ' is: ' +
      minimumCoins(coins, amount)
  )
}

main()
