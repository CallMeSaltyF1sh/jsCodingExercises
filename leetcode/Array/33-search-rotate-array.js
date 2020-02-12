/*
 * Problem desc:
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转
 * (例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2])
 * 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回-1
 * 假设数组中不存在重复的元素
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums.length === 0) return -1;
    else if(nums.length === 1) return nums[0] === target ? 0 : -1;
    
    let left = 0,
        right = nums.length - 1,
        index = -1;
    
    while(left < right) {
        if(nums[left + 1] > nums[left]) {
            left ++;
        } else {
            index = left;
            break;
        } 
        if(nums[right - 1] < nums[right]) {
            right --;
        } else {
            index = right - 1;
            break;
        }
    }
    
    if(target < nums[0] && index !== -1) {
        left = index + 1;
        right = nums.length - 1;
    } else if (target >= nums[0] && index !== -1) {
        left = 0;
        right = index;
    } else {
        left = 0;
        right = nums.length - 1;
    }
    
    while(left <= right) {
        if(nums[left] < target) left++;
        else if(nums[left] === target) return left;
        else return -1;
        
        if(nums[right] > target) right--;
        else if(nums[right] === target) return right;
        else return -1;
    }
    
    return -1;
};