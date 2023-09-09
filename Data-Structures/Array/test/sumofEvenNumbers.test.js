const sumOfEvenNumbers = require('./sumOfEvenNumbers'); // Import the function to be tested

// Test cases
test('Sum of even numbers in an array', () => {
  // Test case 1: Testing with an array containing both even and odd numbers
  expect(sumOfEvenNumbers([1, 2, 3, 4, 5, 6])).toBe(12); // Expected result: 12 (2 + 4 + 6)

  // Test case 2: Testing with an array containing only odd numbers
  expect(sumOfEvenNumbers([1, 3, 5, 7])).toBe(0); // Expected result: 0 (No even numbers)

  // Test case 3: Testing with an array containing only even numbers
  expect(sumOfEvenNumbers([2, 4, 6, 8])).toBe(20); // Expected result: 20 (2 + 4 + 6 + 8)

  // Test case 4: Testing with an array containing negative and positive even numbers
  expect(sumOfEvenNumbers([-2, 4, -6, 8])).toBe(4); // Expected result: 4 (-2 + 4 - 6 + 8)

  // Test case 5: Testing with an empty array
  expect(sumOfEvenNumbers([])).toBe(0); // Expected result: 0 (No numbers in the array)
});
