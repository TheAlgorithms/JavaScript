/*
    author: Theepag, optimised by merelymyself
 */
export const factorialize = (num) => {
  // Step 1. Handles cases where num is 0 or 1, by returning 1.
  let result = 1
  // Step 2. WHILE loop
  while (num > 1) {
    result *= num // or result = result * num;
    num-- // decrement 1 at each iteration
  }
  // Step 3. Return the factorial
  return result
}
