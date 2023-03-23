let maxProfit = function (prices) {
  let leftMaxProfit = [...prices].fill(0);
  let rightMaxProfit = [...prices].fill(0);

  let minPrice = prices[0];
  // find a maximum profit from start to end using one transaction
  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    leftMaxProfit[i] = Math.max(leftMaxProfit[i - 1], prices[i] - minPrice);
  }
  let maxPrices = prices[prices.length - 1];
  //find a maximum proffit from end to start using one transaction
  for (let i = prices.length - 2; i >= 0; i--) {
    maxPrices = Math.max(maxPrices, prices[i]);
    rightMaxProfit[i] = Math.max(rightMaxProfit[i + 1], maxPrices - prices[i]);
  }
  let profit = 0;
  //find a maximum profit evaluating profit from two transactions
  for (let i = 0; i < prices.length; i++) {
    profit = Math.max(profit, rightMaxProfit[i] + leftMaxProfit[i]);
  }
  return profit;
};

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
