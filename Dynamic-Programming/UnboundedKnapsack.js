const unboundedKnapsack = (values, weights, n, target) => {
  // create a lookup table
  // lookup[i] is going to store maximum value
  // with knapsack capacity i.
  const lookup = new Array(target + 1).fill(0);

  // fill lookup[] using above recursive formula
  for(let i = 0; i <= target; i++){
    for(let j = 0; j < n; j++){
      if(weights[j] <= i){
        lookup[i] = Math.max(lookup[i], lookup[i - weights[j]] + values[j]);
      }
    }
  }
  
  //return the max
  return lookup[target];
}

const values = [12, 2, 1, 4, 1];
const weights = [4, 2, 1, 10, 2];
const target = 15;

console.log(unboundedKnapsack(values, weights, values.length - 1, target));
