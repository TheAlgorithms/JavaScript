// @function riemannSum
// @description Calculate the Riemann sum approximation for integration.
// @param {function} f - The function to integrate (a single-variable function).
// @param {number} a - The lower limit of integration.
// @param {number} b - The upper limit of integration.
// @param {number} n - The number of subintervals for approximation.
// @returns {number} - The Riemann sum approximation of the integral.

const riemannSum = (f, a, b, n) => {
    if (n <= 0) {
      throw new Error("Number of subintervals (n) must be greater than zero.");
    }
  
    const delta_x = (b - a) / n;
    let sum = 0;
  
    for (let i = 0; i < n; i++) {
      const x_i = a + i * delta_x;
      sum += f(x_i) * delta_x;
    }
  
    return sum;
  };
  
  // Export the riemannSum function for use in other modules.
  export default riemannSum;
  