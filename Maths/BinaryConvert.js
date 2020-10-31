const BinaryConvert = (number) => {
  const result = []
  let i
  for (i = number; i > 0; i = parseInt(i / 2)) {
    result.push(i % 2) // push the value (remainder)to array
  } return Number(result.reverse().join(''))
  // reverse index of array as string ,join and change the type of value to become Number
}
// call function and value as parameter to passing the value
export { BinaryConvert }
