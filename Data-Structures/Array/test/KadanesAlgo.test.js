// testKadanesAlgorithm.js

import { maxSubArray } from '../KandanesAlgo.js';

function runKadaneTests() {
    // Test Case 1: Basic case
    let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    let result = maxSubArray(nums);
    console.assert(result === 6, `Expected 6, got ${result}`);

    // Test Case 2: All negative numbers
    nums = [-1, -2, -3, -4];
    result = maxSubArray(nums);
    console.assert(result === -1, `Expected -1, got ${result}`);

    // Test Case 3: All positive numbers
    nums = [1, 2, 3, 4];
    result = maxSubArray(nums);
    console.assert(result === 10, `Expected 10, got ${result}`);

    // Test Case 4: Mixed numbers with zero
    nums = [0, -1, 2, 3, -2, 5, -3];
    result = maxSubArray(nums);
    console.assert(result === 8, `Expected 8, got ${result}`);

    // Test Case 5: Single element
    nums = [-5];
    result = maxSubArray(nums);
    console.assert(result === -5, `Expected -5, got ${result}`);

    console.log("All Kadane's Algorithm tests passed!");
}

// Run the tests
runKadaneTests();
