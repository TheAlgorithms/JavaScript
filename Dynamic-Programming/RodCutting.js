/* 
  * You are given a rod of 'n' length and an array of prices associated with all the lengths less than 'n'.
  * Find the maximum profit possible by cutting the rod and selling the pieces.
*/

 export function rodCut(prices, n){
        let memo = new Array(n + 1);
        memo[0] = 0;
   
        for (let i = 1; i<=n; i++)
        {
            let max_val = Number.MIN_VALUE;
            for (let j = 0; j < i; j++)
                max_val = Math.max(max_val, prices[j] + memo[i - j - 1]);
            memo[i] = max_val;
        }
   
       return memo[n];
 }
     

