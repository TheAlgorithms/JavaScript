/**
 * Function that measures the execution time of a given function.
 * @param {Function} func - The function to be measured.
 * @returns {number} - The time taken in milliseconds.
 */
const measureExecutionTime = (func) => {
    if (typeof func !== 'function') {
      throw new TypeError('Input should be a function.');
    }
  
    const startTime = performance.now();
    func();
    const endTime = performance.now();
  
    return endTime - startTime;
  };
  
  export { measureExecutionTime };
  