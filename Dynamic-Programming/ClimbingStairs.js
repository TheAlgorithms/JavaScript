/*
 * You are climbing a stair case. It takes n steps to reach to the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

const climbStairs = (n) => {
  let prev = 0
  let cur = 1
  let temp

  for (let i = 0; i < n; i++) {
    temp = prev
    prev = cur
    cur += temp
  }
  return cur
}

const main = () => {
  const number = 5

  console.log('Number of ways to climb ' + number + ' stairs in ' + climbStairs(5))
}

// testing
main()
