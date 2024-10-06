// test.js


import { threeSum } from '../3sum';
function testThreeSum() {
    // Test Case 1: Basic case
    let nums = [-1, 0, 1, 2, -1, -4];
    let result = threeSum(nums);
    console.assert(JSON.stringify(result) === JSON.stringify([[-1, -1, 2], [-1, 0, 1]]), `Expected [[-1, -1, 2], [-1, 0, 1]], got ${JSON.stringify(result)}`);

    // Test Case 2: No triplet
    nums = [1, 2, 3];
    result = threeSum(nums);
    console.assert(JSON.stringify(result) === JSON.stringify([]), `Expected [], got ${JSON.stringify(result)}`);

    // Test Case 3: Duplicate triplets
    nums = [-2, 0, 0, 2, 2];
    result = threeSum(nums);
    console.assert(JSON.stringify(result) === JSON.stringify([[-2, 0, 2]]), `Expected [[-2, 0, 2]], got ${JSON.stringify(result)}`);

    // Test Case 4: All negative numbers
    nums = [-1, -2, -3, -4];
    result = threeSum(nums);
    console.assert(JSON.stringify(result) === JSON.stringify([]), `Expected [], got ${JSON.stringify(result)}`);

    console.log("All 3-Sum tests passed!");
}

// Run the tests
testThreeSum();
