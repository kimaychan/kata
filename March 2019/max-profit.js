/**
 * Say you have an array for which the ith element is the price of a given stock on day i. 
 * If you were only permitted to complete at most one transaction (i.e., 
 * buy one and sell one share of the stock), design an algorithm to 
 * find the maximum profit. Note that you cannot sell a stock before you buy one.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	if (prices.length <= 1) return 0
	var profit = 0
	for (let i = 0; i < prices.length - 1; i++) {
		for (let j = i+1; j < prices.length; j++) {
			if (prices[j]-prices[i] > profit) profit = prices[j]-prices[i]
		}
	}
	return profit
};

//03-22-2019