const createPermutations = (str) => {
// convert string to array
  const arr = str.split('')

  // get array length
  const strLen = arr.length
  // this will hold all the permutations
  const perms = []
  let rest
  let picked
  let restPerms
  let next

  // if strLen is zero, return the same string
  if (strLen === 0) { return [str] }
  // loop to the length to get all permutations
  for (let i = 0; i < strLen; i++) {
    rest = Object.create(arr)
    picked = rest.splice(i, 1)

    restPerms = createPermutations(rest.join(''))

    for (let j = 0, jLen = restPerms.length; j < jLen; j++) {
      next = picked.concat(restPerms[j])
      perms.push(next.join(''))
    }
  }
  return perms
}

console.log(createPermutations('abc')) // should print ["abc", "acb", "bac", "bca", "cab", "cba"]
