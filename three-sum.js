/**
 * Problem desc:
 * 给定一个包含n个整数的数组nums，判断nums中是否存在三个元素a，b，c，使得a + b + c = 0？找出所有满足条件且不重复的三元组。
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 
var threeSum = function(nums) {
    if(!nums || nums.length < 3) {
        return [];
    }
    
    let result = [],
        left = 0,
        right = 0;
    
    nums.sort((a, b) => a - b);
    
    for(let i = 0; i < nums.length - 2; i++){
        if(nums[i] > 0) break;
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        
        left = i + 1;
        right = nums.length - 1;
        while(left < right) {
            if(nums[i] + nums[left] + nums[right] < 0) {
                left ++;
            } else if(nums[i] + nums[left] + nums[right] > 0) {
                right --;
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                while(left < right && nums[left] === nums[left + 1]) left ++;
                while(left < right && nums[right] === nums[right - 1]) right --;
                left ++;
                right --;
            }
        }
    }
    
    return result;
};
