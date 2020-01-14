/**
 * Problem desc:
 * 假设你正在爬楼梯。需要n阶你才能到达楼顶。
 * 每次你可以爬1或2个台阶。你有多少种不同的方法可以爬到楼顶呢？
 */
/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
    if(n === 1) return 1;
    
    let result = [0, 1, 2];
    
    for(let i = 3; i <= n; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    
    return result[n];
};