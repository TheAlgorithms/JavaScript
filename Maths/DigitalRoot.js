const digitalRoot = (num) => {
  /**
   * Calculates the digital root of a number in constant time.
   * @param {number} num - The number to compute the digital root for.
   * @returns {number} The digital root of the given number.
   *
   * @example digitalRoot(456) // returns 6
   * @example digitalRoot(-999) // returns 9
   * @example digitalRoot(0) // returns 0
   */
  if (num < 0) num = -num;
  return num === 0 ? num : 1 + ((num - 1) % 9);
};
/*------------------------------------------------------------------------------------*/

const digitalRootRecursive = (num) => {
  /**
   * Calculates the digital root of a number using recursion.
   * @param {number} num - The number to compute the digital root for.
   * @returns {number} The digital root of the given number.
   *
   * @example digitalRootRecursive(456) // returns 6
   * @example digitalRootrecursive(999) // returns 9
   * @example digitalRootRecursive(0) // returns 0
   */
  if (num < 0) num = -num; // Handle negative input by converting to positive
  if (num < 10) return num; // Base case for single-digit number

  // Recursive case: sum digits and continue to reduce
  const sum = (num % 10) + digitalRootRecursive(Math.floor(num / 10));
  return digitalRootRecursive(sum); // Call digitalRoot recursively to reduce to single digit
};

export { digitalRoot, digitalRootRecursive };
