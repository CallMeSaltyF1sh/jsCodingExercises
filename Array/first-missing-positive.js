/*
 * Problem desc:
 * 给定一个未排序的整数数组，找出其中没有出现的最小的正整数。
 */
 
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if(nums.length === 0) return 1;
    nums.sort((a, b) => (a - b));
    let min = 1,
        i = 0;
    
    for(i = 0; i < nums.length; i++) {
        if(nums[i] <= 0) continue;
        
        if(nums[i] > min) {
            return min;
        } else if (nums[i] === min) {
            if(nums[i] === nums[i+1]) continue;
            min ++;
        }
    }
    
    if(min === 1 && nums.length > 1) {
        min = (i === nums.length) ? (nums[i-1] < 0 ? 1 : nums[i-1] + 1) : 1;
    }
    
    return min;
};
