const BinaryConvert = (number) => {
  const result = []
  let i
  for (i = number; i > 0; i = parseInt(i / 2)) {
    result.push(i % 2)
  } return Number(result.reverse().join(''))
}
export { BinaryConvert }
