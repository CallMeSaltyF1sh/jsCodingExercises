/**
 * Problem desc:
 * 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。
 * 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。
 * 注意: 假设字符串的长度不会超过 1010。
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let map = new Map(),
        cnt = 0,
        temp;
    for (let c of s) {
        if (temp = map.get(c)) map.set(c, temp + 1);
        else map.set(c, 1);
    }
    for (let value of map.values()) {
        if (cnt % 2 === 0 && value % 2 !== 0) {
            cnt++;
        }
        cnt += value % 2 ? (value - 1) : value;
    }
    return cnt;
};