/**
 * Problem desc:
 * 给定整数数组 A，每次 move 操作将会选择任意 A[i]，并将其递增 1。
 * 返回使 A 中的每个值都是唯一的最少操作次数。
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function (A) {
    A.sort((a, b) => a - b);
    let cnt = temp = 0;
    for (let i = 1, len = A.length; i < len; i++) {
        if (A[i] <= A[i - 1]) {
            temp = A[i - 1] - A[i] + 1;
            A[i] = A[i] + temp;
            cnt += temp;
        }
    }
    return cnt;
};