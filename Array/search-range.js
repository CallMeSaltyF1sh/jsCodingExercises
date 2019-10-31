/**
 * Problem desc:
 * 给定一个按照升序排列的整数数组nums，和一个目标值target。找出给定目标值在数组中的开始位置和结束位置。
 * 算法时间复杂度必须是 O(log n) 级别。
 * 如果数组中不存在目标值，返回[-1, -1]。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*
//采取二分法
var searchRange = function(nums, target) {
    let left = getIndex(nums, target, true);
    
    if(left === nums.length || nums[left] !== target) {
        return [-1, -1];
    }
    
    let right = getIndex(nums, target, false) - 1;
    return [left, right];
};

/*
 * sign为true时取开始位，为false时取末位的后一位
 */
var getIndex = function(nums, target, sign) {
    let left = 0,
        right = nums.length,
        middle;
    
    while(left < right) {
        middle = Math.floor((left + right) / 2);
        if(nums[middle] > target || (sign && nums[middle] === target)) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }
    
    return left;
}
