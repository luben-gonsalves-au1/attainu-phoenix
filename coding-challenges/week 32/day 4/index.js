var maxProfit = function(prices) {
    min = Infinity;
    max = 0;
    for(i = 0; i < prices.length;i++) {
        if(prices[i] < min) {
            min = prices[i]
        } else {
            max = Math.max(max, prices[i] - min)
        }
    }
    return max
};

maxProfit([60, 50, 40, 55, 37.5, 56, 70])