function euclideanGCDRecursive (first, second) {
  /*
    Calculates GCD of two numbers using Euclidean Recursive Algorithm
    :param first: First number
    :param second: Second number
    :return: GCD of the numbers
    */
  if (second === 0) {
    return first
  } else {
    return euclideanGCDRecursive(second, (first % second))
  }
}

function euclideanGCDIterative (first, second) {
  /*
    Calculates GCD of two numbers using Euclidean Iterative Algorithm
    :param first: First number
    :param second: Second number
    :return: GCD of the numbers
    */
  while (second !== 0) {
    const temp = second
    second = first % second
    first = temp
  }
  return first
}

export { euclideanGCDIterative, euclideanGCDRecursive }
