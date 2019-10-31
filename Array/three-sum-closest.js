/**
 * Problem desc:
 * 给定一个包括n个整数的数组nums和一个目标值target。找出nums中的三个整数，使得它们的和与 target 最接近；
 * 返回这三个数的和（假定每组输入只存在唯一答案）。
 */
 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if(!nums || nums.length < 3) {
        return null;
    }
    
    let result = null,
        temp = 0;
    
    for(let i = 0; i < nums.length - 2; i++){  
        for(let j = i + 1; j < nums.length - 1; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                temp = nums[i] + nums[j] + nums[k]; 
                if(temp === target) return temp;
                if(i === 0 && j === 1 && k === 2) result = temp;  
                if(Math.abs(target - temp) < Math.abs(target - result)) result = temp;
            }
        }
    }
    
    return result;
};
