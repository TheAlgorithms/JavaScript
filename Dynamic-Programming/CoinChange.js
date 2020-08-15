function change (coins, amount) {
  const combinations = new Array(amount + 1).fill(0)
  combinations[0] = 1

  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i]

    for (let j = coin; j < amount + 1; j++) {
      combinations[j] += combinations[j - coin]
    }
    // Uncomment the line below to see the state of combinations for each coin
    // printAmount(combinations);
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
        if (subRes !== Number.MAX_SAFE_INTEGER && subRes + 1 < minimumCoins[i]) {
          minimumCoins[i] = subRes + 1
        }
      }
    }
  }
  // Uncomment the line below to see the state of combinations for each coin
  // printAmount(minimumCoins);
  return minimumCoins[amount]
}

// A basic print method which prints all the contents of the array
function printAmount (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + ' ')
  }
  console.log('\n')
}

function main () {
  const amount = 12
  const coins = [2, 4, 5]
  console.log('Number of combinations of getting change for ' + amount + ' is: ' + change(coins, amount))
  console.log('Minimum number of coins required for amount :' + amount + ' is: ' + minimumCoins(coins, amount))
}

main()
