/**
 * Problem desc:
 * 给定一个包含n个整数的数组nums和一个目标值target，判断nums中是否存在四个元素a，b，c 和 d ，使得a + b + c + d的值与target相等;
 * 找出所有满足条件且不重复的四元组。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if(!nums || nums.length < 4) {
        return [];
    }
    
    let result = [],
        left = 0,
        right = 0;
    
    nums.sort((a, b) => a - b);
    
    for(let i = 0; i < nums.length - 3; i++){
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        for(let j = i + 1; j < nums.length - 2; j++) {
            if(j > i + 1 && nums[j] === nums[j - 1]) continue;
            left = j + 1;
            right = nums.length - 1;
            while(left < right) {
                if(nums[i] + nums[j] + nums[left] + nums[right] < target) {
                    left ++;
                } else if(nums[i] + nums[j] + nums[left] + nums[right] > target) {
                    right --;
                } else {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    while(left < right && nums[left] === nums[left + 1]) left ++;
                    while(left < right && nums[right] === nums[right - 1]) right --;
                    left ++;
                    right --;
                }
            }
        }
    }
    
    return result;
};
