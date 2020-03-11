/**
 * Problem desc:
 * 给你一个整数数组 A，只有可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false。
 * 形式上，如果可以找出索引 i+1 < j 且满足 (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1]) 就可以将数组三等分。
 */

/**
* @param {number[]} A
* @return {boolean}
*/
//1 慢破天际
var canThreePartsEqualSum = function (A) {
    if (A.length < 3) return false;
    let start = 0,
        end = A.length - 2,
        left = 0,
        right = A[end + 1],
        total = A.reduce((a, b) => a + b, 0);
    while (end >= 1) {
        start = left = 0;
        while (start < end) {
            left += A[start];
            middle = total - left - right;
            if (left === middle && middle === right) {
                return true;
            } else {
                start++;
                continue;
            }
        }
        right += A[end--];
    }
    return false;
};


//2 我又沙雕了。。。直接跟总和除3比就完事了
var canThreePartsEqualSum = function (A) {
    if (A.length < 3) return false;
    let start = 1,
        end = A.length - 2,
        left = A[0],
        right = A[end + 1],
        sum = A.reduce((a, b) => a + b, 0),
        total = sum / 3;
    while (start < end) {
        if (left === total) break;
        left += A[start++];
    }
    if (left !== total) return false;
    while (end > start) {
        if (right === total) break;
        right += A[end--];
    }
    if (right !== total) return false;
    return sum - right - left === total ? true : false;
};