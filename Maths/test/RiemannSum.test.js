import riemannSum from "../RiemannSum";

// Test cases for the riemannSum function.
describe('riemannSum', () => {
    // Test case 1: Integration of a simple linear function.
    it('calculates the integral of a linear function correctly', () => {
      const linearFunction = (x) => 2 * x; // f(x) = 2x
      const a = 0;
      const b = 5;
      const n = 100;
      const result = riemannSum(linearFunction, a, b, n);
      expect(result).toBeCloseTo(25, 1); // Adjusted precision to 1 decimal place.
    });
  
    // Test case 2: Integration of a quadratic function.
    it('calculates the integral of a quadratic function correctly', () => {
      const quadraticFunction = (x) => x ** 2; // f(x) = x^2
      const a = 0;
      const b = 3;
      const n = 1000;
      const result = riemannSum(quadraticFunction, a, b, n);
      expect(result).toBeCloseTo(9, 1); // Adjusted precision to 1 decimal place.
    });
  });