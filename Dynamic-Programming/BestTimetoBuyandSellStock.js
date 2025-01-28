/*
  Author : Neha611 
  github Link:https://github.com/Neha611
  
  Problem Description:
  You are given an array prices where prices[i] is the price of a given stock on the ith day.
  You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
  Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

  Example:
  Input: prices = [7,1,5,3,6,4]
  Output: 5
  Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
  Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

  Problem Link:
  https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy_day=-1;
    let buy=Number.MAX_VALUE;
    let sell_day=-1;
    let profit=0;
    for(let i=0;i<prices.length;i++)
    {
        if(prices[i]<buy)
        {
            /*we will buy the stock with lower price*/
            buy=prices[i];
            buy_day=i;
        }
        else if(prices[i]>prices[buy_day])
        {
            /*if the current price of stock is higher than the price it is bought with we can or cannot sell on this day*/
            sell_day=i;
        }
        if(buy_day<sell_day)
        {
            /*get profit*/
            profit=Math.max(profit,prices[sell_day]-prices[buy_day]);
        }
    }
    return profit;
};
