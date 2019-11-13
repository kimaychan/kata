/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit. You may complete as many transactions as 
 * you like (i.e., buy one and sell one share of the stock multiple times).
 * 
 * note: You may not engage in multiple transactions at the same time 
 * (i.e., you must sell the stock before you buy again).
 * 
 * @param {*} prices 
 */

var maxProfit = function(prices) {
  let totalProfit = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i+1])
      totalProfit += prices[i+1] - prices[i]
  }
  return totalProfit
};

// 11-13-19