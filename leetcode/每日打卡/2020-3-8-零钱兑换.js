/**
 * Problem desc:
 * 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
 * 如果没有任何一种硬币组合能组成总金额，返回 -1。
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//第一版：很慢
//根据count(i)=Math.min(count(i−coins[j]))+1
var coinChange = function (coins, amount) {
    function count(n, arr = [0]) {
        if (n < 0) return -1;
        if (arr[n] !== undefined) {
            return arr[n];
        }
        let temp = [],
            res = -1;
        coins.forEach(item => {
            res = count(n - item, arr);
            if (res > -1) temp.push(res);
        });
        res = temp.length ? Math.min(...temp) + 1 : -1;
        arr[n] = res;
        return res;
    }
    return count(amount);
};

//把递归改成循环快了好多
var coinChange = function (coins, amount) {
    const arr = [0];
    for (let i = 1; i <= amount; i++) {
        let min = Infinity;
        for (let j = 0, len = coins.length; j < len; j++) {
            if (coins[j] > i) continue;
            if (arr[i - coins[j]] + 1 < min) {
                min = arr[i - coins[j]] + 1;
            }
        }
        arr[i] = min;
    }
    return arr[amount] < Infinity ? arr[amount] : -1;
}