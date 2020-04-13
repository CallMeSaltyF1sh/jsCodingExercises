/**
 * 最大子序和
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    const len = nums.length;
    if (!len) return 0;

    let temp = new Array(len),
        res = new Array(len);
    temp[0] = nums[0];
    res[0] = nums[0];
    for (let i = 1; i < len; i++) {
        temp[i] = temp[i - 1] + nums[i] > nums[i] ? temp[i - 1] + nums[i] : nums[i];
        res[i] = temp[i] > res[i - 1] ? temp[i] : res[i - 1];
    }
    return res[len - 1];
};