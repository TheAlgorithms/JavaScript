/**
 * @params {Array} coins
 * @params {Number} amount
 */
export const change = (coins, amount) => {
  if (!Array.isArray(coins)) {
    throw new TypeError('Coins must be an array')
  }

  if (typeof amount !== 'number' || amount < 0) {
    throw new TypeError('Amount must be a non-negative number')
  }

  if (amount === 0) {
    return 1
  }

  if (coins.length === 0) {
    return 0
  }

  const combinations = new Array(amount + 1).fill(0)
  combinations[0] = 1

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j < combinations.length; j++) {
      combinations[j] += combinations[j - coins[i]]
    }
  }

  return combinations[amount]
}

/**
 * @params {Array} coins
 * @params {Number} amount
 */
export const coinChangeMin = (coins, amount) => {
  if (!Array.isArray(coins)) {
    throw new TypeError('Coins must be an array')
  }

  if (typeof amount !== 'number' || amount < 0) {
    throw new TypeError('Amount must be a non-negative number')
  }

  if (amount === 0) {
    return 0
  }

  if (coins.length === 0) {
    return -1
  }

  const map = { 0: 0 }

  for (let i = 1; i <= amount; i++) {
    let min = Infinity
    for (const coin of coins) {
      if (i < coin) continue
      min = Math.min(min, 1 + map[i - coin])
    }
    map[i] = min
  }

  return map[amount] === Infinity ? -1 : map[amount]
}
