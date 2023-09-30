// Problem Link: https://leetcode.com/problems/generate-parentheses/ 
// Title: 22. Generate Parentheses


// This JS program generates all valid combinations of n pairs of parentheses.
// It uses a recursive approach with backtracking to explore and construct valid combinations.


function generateParenthesis(n) {
  const ans = [];
  
  // Helper function to generate valid parentheses
  function solve(open, close, output) {
    // Base case: If both open and close parentheses are used up, add the current output to the result list
    if (open === 0 && close === 0) {
      ans.push(output);
      return;
    }

    // Add an open parenthesis if there are remaining open parentheses
    if (open > 0) {
      solve(open - 1, close, output + "(");
    }

    // Add a close parenthesis if there are more open than close parentheses
    if (close > open) {
      solve(open, close - 1, output + ")");
    }
  }

  solve(n, n, ""); // Call the recursive solver
  return ans; // Return the list of valid parentheses
}

const n = 3; // Example input
const parentheses = generateParenthesis(n);

// Display the generated valid parentheses
console.log(`Valid parentheses of length ${n}:`);
parentheses.forEach((parenthesis) => {
  console.log(parenthesis);
});
