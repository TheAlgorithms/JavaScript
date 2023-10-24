// We are given an array of prices where prices[i] is the price of a given stock on an ith day.
// We  want to maximize our profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If we cannot achieve any profit, return 0.
// Problem statement - https://www.codingninjas.com/studio/problems/selling-stock_630282?
//************* Brute Force Approach *************

function maximumProfit(prices){
   
    let profit=0;
    for(let i=0;i<prices.length;i++){
        for(let j=i+1;j<prices.length;j++){
            if(prices[j]<=prices[i]){
                continue;
            }else{
                profit=Math.max(profit,(prices[j]-prices[i]));
            }
        }
    }
    return profit;
   
}
// For user to give input
let prices=prompt("Enter the prices:").split(" ");

const our_profit=maximumProfit(prices);
// To view the output
document.write(our_profit);
 // Time Complexity-O(N^2)
//  Space Complexity -O(1)

//**************** Optimal Approach**********
function maximumProfit(prices1){
   
    let profit1=0;
    let min=prices1[0];
    for(let i=1;i<prices1.length;i++){
        
            if(prices1[i]<min){
                min=prices1[i];
            }else if (prices1[i]>min){
                profit1=Math.max(profit1,(prices1[i]-min));
            }
        
    }
    return profit1;
    
}

let prices1=prompt("Enter the prices:").split(" ");

const our_profit1=maximumProfit(prices);
document.write(our_profit1);

// Time Complexity-O(N)
//  Space Complexity -O(1)



