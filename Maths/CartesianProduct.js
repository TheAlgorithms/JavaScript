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
    return []
  }
  const product = []
 
  for(let elementA of setA){
    for(let elementB of setB){
      product.push([ elementA, elementB])
    }
  }
  return product
}

export { cartesianProduct }
