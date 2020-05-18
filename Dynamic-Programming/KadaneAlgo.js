function KadaneAlgo (array) {
  let cummulativeSum = 0
  let maxSum = 0
  for (var i = 0; i < array.length; i++) {
    cummulativeSum = cummulativeSum + array[i]
    if (cummulativeSum < 0) {
      cummulativeSum = 0
    }
    if (maxSum < cummulativeSum) {
      maxSum = cummulativeSum
    }
  }
  return maxSum
  // This function returns largest sum contigous sum in a array
}
function main () {
  var myArray = [1, 2, 3, 4, -6]
  var result = KadaneAlgo(myArray)
  console.log(result)
}
main()
