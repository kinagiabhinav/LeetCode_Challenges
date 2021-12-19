/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let profit = 0,
        maxProfit = 0;
    for(let i = 0; i < prices.length; i++){
        for(let j = i+1; j < prices.length; j++){
            if(prices[i] < prices[j])
                profit = prices[j] - prices[i];
            
            maxProfit = Math.max(profit, maxProfit);
        }
    }
    
    return maxProfit;
    //compare and store max
    //return profit
};

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfitOptimized = function(prices) {
    let profit = 0,
        maxProfit = 0;
    
    let minPrice = Infinity;
    
    for(let price of prices){
        minPrice = Math.min(minPrice, price);
        profit = price - minPrice;
        maxProfit = Math.max(maxProfit, profit);
    }
    
    return maxProfit;
};