/**
 * Problem desc:
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const flag = Math.floor(nums.length / 2);
    const map = new Map();
    let temp;
    for(let i of nums) {
        temp = map.get(i)
        if(!temp) map.set(i, 1);
        else {
            if(temp + 1 > flag) {
                return i;
            } else {
                map.set(i, temp + 1);
            }
        }
    }
    return nums[0];
};