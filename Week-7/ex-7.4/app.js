const maxProfit = (prices) => {
    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))

console.log(maxProfit([7, 6, 4, 3, 1]))

//This function iterates through the prices array and keeps track of the minimum price seen so far and the maximum profit that can be made by selling the stock at the current price.
//The minimum price is updated if a lower price is encountered, and the max profit is updated if selling at the current price results in a higher profit than the current maximum.