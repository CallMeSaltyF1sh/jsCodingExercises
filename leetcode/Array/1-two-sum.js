/**
 * Problem desc:
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
   假设每种输入只会对应一个答案，但不能重复利用这个数组中同样的元素。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(var i=0, l = nums.length; i<l-1; i++) {
        for(let j=i+1; j<l; j++) {
            if((nums[i]+nums[j]) === target) {
                return [i, j]
            }
        }
    }
};
