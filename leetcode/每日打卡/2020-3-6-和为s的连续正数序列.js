/**
 * Problem desc:
 * 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。
 * 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。
 */

/**
 * @param {number} target
 * @return {number[][]}
 */
//第一版：超级慢 unshift用太多了
var findContinuousSequence = function (target) {
    let result = [],
        arr = [],
        temp = plus = 0,
        min = Math.ceil(-0.5 + 0.5 * Math.sqrt(1 + 8 * target)),  //从1至少连续加到多少可以达到target值
        max = Math.ceil(target / 2);

    while (min <= max) {
        temp = max;
        plus = 0;
        arr = [];
        while (plus <= target) {
            if (target === plus) {
                result.unshift(arr);
                break;
            }
            arr.unshift(temp);
            plus += temp;
            temp--;
        }
        max--;
    }
    return result;
};


//改成从前向后循环，用start记住下一个输出序列的第一个值，end代表最后一个值
var findContinuousSequence = function (target) {
    let result = [],
        arr = [],
        start = end = 1,
        plus = 0,
        max = Math.ceil(target / 2);

    while (end <= max) {
        while (plus < target) {   //还没到target的话end继续加一
            plus += end;
            arr.push(end++);
        }
        while (plus > target) {  //已经超过target就把start往前移让和不大于target
            plus -= start;
            start++;
        }
        if (plus === target) {
            result.push(arr.slice(start - 1, end));
            plus -= start;
            start++;
        }
    }

    return result;
};