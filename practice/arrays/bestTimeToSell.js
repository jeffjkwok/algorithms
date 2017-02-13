// Best Time to Sell Stock
//
// Say you have an array for which the ith element is the price of a given stock on day i.
//
// If you were only permitted to complete at most one transaction
// (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit
//
// Example 1:
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5
// max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
//
// Example 2:
// Input: [7, 6, 4, 3, 1]
// Output: 0
//
// In this case, no transaction is done, i.e. max profit = 0.

var maxProfit = function(prices) {
    var min = Infinity;
    var profit = 0;
    for(var idx = 0; idx< prices.length; idx ++){
        min = Math.min(min , prices[idx]);
        profit = Math.max(profit, prices[idx]-min);
    }
    return profit
};


// Best Time to Sell part 2

// Say you have an array for which the ith element is the price of a given stock on day i.
// Design an algorithm to find the maximum profit.
// You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times).
// However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

var maxProfit = function(prices) {
    var profit = 0;
    for(var idx = 1; idx<prices.length; idx++){
        profit += Math.max(0, prices[idx]-prices[idx-1])
    }
    return (prices.length <= 1 ) ? 0 : profit
};
