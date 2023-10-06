'use strict'

const permutate = (aString) => {
  if (typeof aString !== 'string' || !aString) {
    throw new Error('The arg must be a valid, non empty string')
  }
  const characters = aString.split('')
  let permutations = [[characters.shift()]]
  while (characters.length) {
    const currentCharacter = characters.shift()
    permutations = calculateCurrentCharacterPermutation(
      permutations,
      currentCharacter
    )
  }
  return permutations
    .map((character) => character.join(''))
    .filter((item, index, self) => self.indexOf(item) === index)
    .sort()
}

const calculateCurrentCharacterPermutation = (
  allPermutations,
  currentCharacter
) => {
  const currentPermutations = []
  allPermutations.forEach((permutation) => {
    let index = 0
    while (index <= permutation.length) {
      const tmp = [...permutation]
      tmp.splice(index, 0, currentCharacter)
      currentPermutations.push(tmp)
      index++
    }
  })
  return currentPermutations
}

export { permutate }
