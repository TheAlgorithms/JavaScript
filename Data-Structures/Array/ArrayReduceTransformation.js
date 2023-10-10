/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val=init; //set current value
    for(let i=0;i<nums.length;i++){ //iterate over each ele in array
        val = fn(val, nums[i]);//store the val as function of the current val with the element
    }
    return val;//output
};