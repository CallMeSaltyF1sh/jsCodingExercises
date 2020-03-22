/**
 * Problem desc:
 * 有两个容量分别为 x升 和 y升 的水壶以及无限多的水。请判断能否通过使用这两个水壶，从而可以得到恰好 z升 的水？
 * 如果可以，最后请用以上水壶中的一或两个来盛放取得的 z升 水。
 * 你允许：
 * 装满任意一个水壶
 * 清空任意一个水壶
 * 从一个水壶向另外一个水壶倒水，直到装满或者倒空
 */

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
//考虑ax+by=z;只要满足x+y>=z,并且存在a,b使等式成立即可
var canMeasureWater = function (x, y, z) {
    if (x + y < z) return false;
    if (x === 0 || y === 0) return z === 0 || x + y === z;
    return z % gcd(x, y) === 0;
};
var gcd = function (a, b) {
    let min = a > b ? b : a,
        max = a > b ? a : b,
        temp;
    while (min) {
        temp = min;
        min = max % min;
        max = temp;
    }
    return max;
}