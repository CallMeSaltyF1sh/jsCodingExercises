/**
 * Problem desc:
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。必须原地修改，只允许使用额外常数空间。
 * 例子：[1,2,3] -> [1,3,2]；[1,5,1] -> [5,1,1]
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i, j, k;
    let len = nums.length,
        flag = true;
    for(i = 1; i < len; i++) {
        if(nums[i] > nums[i - 1]) {
            flag = false;
            break;
        }
    }
    if(flag) return nums.reverse();

    flag = len - 1;
    let temp = 0;
    for(i = len - 1; i > 0; i--) {
        if(nums[i - 1] < nums[i]) {
            flag = i;
            for(j = i + 1; j < len; j++) {
                if(nums[j] < nums[flag] && nums[j] > nums[i - 1]) {
                    flag = j;
                }
            }
            temp = nums[i - 1];
            nums[i - 1] = nums[flag];
            nums[flag] = temp;
            for(j = i; j < len - 1; j++) {
                for(k = j + 1; k < len; k++) {
                    if(nums[j] > nums[k]) {
                        temp = nums[j];
                        nums[j] = nums[k];
                        nums[k] = temp;
                    }
                }
            }
            break;
        }
    }
    
};
