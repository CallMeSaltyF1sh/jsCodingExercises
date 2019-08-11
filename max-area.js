/**
 * Problem desc:
 * 给定n个非负整数a1，a2，...，an，每个数代表坐标中的一个点(i, ai)。
 * 在坐标内画n条垂直线，垂直线i的两个端点分别为(i, ai)和(i, 0)。找出其中的两条线，使得它们与x轴共同构成的容器可以容纳最多的水。
 * 返回最大容量，即围成的最大面积。
 */
/**
 * @param {number[]} height
 * @return {number}
 */
 
var maxArea = function(height) {
    if(!height){
        return 0;
    } else if(height.length === 2) {
        return height[0] > height[1] ? height[1] : height[0];
    } 
    
    let max = 0,
        temp = 0,
        left = 0,
        right = height.length - 1;
    
    while(left < right) {
        temp = height[left] > height[right] ? height[right] : height[left];
        max = (temp * (right - left)) > max ? (temp * (right - left)) : max;
        if(height[left] < height[right]){
            left ++;
        } else {
            right --;
        }
    }
    
    return max;
};
