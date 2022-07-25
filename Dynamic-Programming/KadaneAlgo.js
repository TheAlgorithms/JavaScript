/* Kadane's algorithm is one of the most efficient ways to
 * calculate the maximum contiguous subarray sum for a given array.
 * Below is the implementation of kadanes's algorithm along with
 * some sample test cases.
 * In case of All negative number's it return's maximum of negative number.
 */

export function kadaneAlgo (array) {
    if(array.length==0) // if array is empty then maximum subarray sum will be 0
        return 0;
    // cumulative sum holds the prefix sum of array
    let minimum=array[0],size=array.length;
    // Maximum cumulative sum is subtracted from minimum cumulative sum to find the maximum  subarray sum.
    let cumulativeSum=array[0],maxSubArraySum=array[0];
    for(i=1;i<size;i++){
     cumulativeSum+=array[i];
     if(cumulativeSum>maxSubArraySum)
         maxSubArraySum=cumulativeSum;
     if(cumulativeSum-minimum> maxSubArraySum)
         maxSubArraySum=cumulativeSum-minimum;
     if(cumulativeSum<minimum)
         minimum=cumulativeSum;
    }
    return maxSubArraySum;
  // This function returns largest subarray sum of an array.
}
