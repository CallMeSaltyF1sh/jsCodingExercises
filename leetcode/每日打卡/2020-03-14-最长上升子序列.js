/**
 * Problem desc:
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (!nums.length) return 0;
    let arr = new Array(nums.length).fill(1);
    for (let i = 1, len = nums.length; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (arr[j] + 1 > arr[i]) arr[i] = arr[j] + 1;
            }
        }
    }
    return Math.max(...arr);
};