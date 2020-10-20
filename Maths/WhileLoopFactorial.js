/*
    author: Theepag
 */
const factorialize = (num) => {
    // Step 1. variable result to store num
    let result = num;
    // If num = 0 OR 1, the factorial will return 1
    if (num === 0 || num === 1) 
      return 1; 
    // Step 2. WHILE loop 
    while (num > 1) { 
      num--; // decrement 1 at each iteration
      result = result * num; // or result = result * num;
    }
    // Step 3. Return the factorial
    return result;
}
//test
console.log(factorialize(5));
console.log(factorialize(4));