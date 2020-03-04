/**
 * Problem desc:
 * 给定一个非负整数数组，你最初位于数组的第一个位置；
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度；
 * 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let max = 0,
        end = 0,  //最远能跳到的位置
        step = 0;
    for(let i=0, len=nums.length-1; i<len; i++) {
        max = Math.max(max, nums[i] + i);
        if(i === end) {  //更新再走一次能到的最远边界
            end = max;
            step ++;
        }
    }
    return step;
};