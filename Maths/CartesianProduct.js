/**
 * @function cartesianProduct
 * @description Generate Cartesian Product of Two Sets.
 * @param {*[]} setA -First set
 * @param {*[]} setB -Second set
 * @return {*[]} -Cartesian Product of setA and setB
 */
const cartesianProduct = (setA, setB) => {
  // Check if input sets are not empty.
  if (!setA || !setB || !setA.length || !setB.length) {
    return null;
  }
  const product = [];

  for (let indexA = 0; indexA < setA.length; indexA += 1) {
    for (let indexB = 0; indexB < setB.length; indexB += 1) {
      product.push([setA[indexA], setB[indexB]]);
    }
  }

  return product
}

export { cartesianProduct }