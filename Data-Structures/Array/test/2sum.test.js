// test.js

import { twoSum } from '../2Sum';



function testTwoSum() {
    // Test Case 1: Basic case
    let nums = [2, 7, 11, 15];
    let target = 9;
    let result = twoSum(nums, target);
    console.assert(JSON.stringify(result) === JSON.stringify([0, 1]), `Expected [0, 1], got ${result}`);

    // Test Case 2: No solution
    nums = [1, 2, 3];
    target = 6;
    result = twoSum(nums, target);
    console.assert(result === null, `Expected null, got ${result}`);

    // Test Case 3: Duplicate values
    nums = [3, 2, 4];
    target = 6;
    result = twoSum(nums, target);
    console.assert(JSON.stringify(result) === JSON.stringify([1, 2]), `Expected [1, 2], got ${result}`);

    // Test Case 4: Negative numbers
    nums = [-3, 4, 3, 90];
    target = 0;
    result = twoSum(nums, target);
    console.assert(JSON.stringify(result) === JSON.stringify([0, 2]), `Expected [0, 2], got ${result}`);

    console.log("All 2-Sum tests passed!");
}
testTwoSum();
