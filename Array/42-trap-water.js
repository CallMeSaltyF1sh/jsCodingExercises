/*
 * Problem desc:
 * 给定n个非负整数表示每个宽度为1的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 */
 
/**
 * @param {number[]} height
 * @return {number}
 */
 //方法一：分别从左边和右边遍历，找到数组中从下标i到最左端最高的条形块高度和从下标i到最右端最高的条形块高度，找到覆盖区域。
var trap = function(height) {
    if(height.length === 0) return 0;
    
    let leftMax = [],
        rightMax = [],
        s = 0,
        len = height.length;
    
    leftMax[0] = height[0];
    rightMax[len - 1] = height[len - 1];
    for(let i = 1; i < len; i++) {
        leftMax[i] = Math.max(height[i], leftMax[i - 1]);
    }
    for(let i = len - 2; i > 0; i--) {
        rightMax[i] = Math.max(height[i], rightMax[i + 1]);
    }
    for(let i = 1; i < len - 1; i++) {
        s += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    
    return s;
}


//方法二：使用双指针
var trap = function(height) {
    if(height.length === 0) return 0;
    
    let left = 0,
        right = height.length - 1,
        lmax = 0,
        rmax = 0,
        s = 0;
    
    while(left < right) {
        if(height[left] < height[right]) {
            if(height[left] < lmax) s += lmax - height[left];
            else lmax = height[left];
            left ++;
        } else {
            if(height[right] < rmax) s += rmax - height[right];
            else rmax = height[right];
            right --;
        }
    }
    
    return s;
};
