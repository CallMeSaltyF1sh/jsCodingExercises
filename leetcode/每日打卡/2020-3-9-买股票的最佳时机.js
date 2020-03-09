/**
 * Problem desc:
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。
 * 注意你不能在买入股票前卖出股票。
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
//1
var maxProfit = function (prices) {
    let max = 0,
        temp = 0;
    while (prices.length) {
        temp = prices[0];
        prices.splice(0, 1);
        temp = Math.max(...prices) - temp;
        max = max < temp ? temp : max;
    }
    return max;
};

//2
var maxProfit = function (prices) {
    if (!prices.length) return 0;
    let min = prices[0],
        max = 0;
    for (let i = 1, len = prices.length; i < len; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else {
            max = Math.max(prices[i] - min, max);
        }
    }
    return max;
}