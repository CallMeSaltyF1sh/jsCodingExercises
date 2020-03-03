/**
 * Problem desc:
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合；
 * candidates 中的数字可以无限制重复被选取。
 * 说明：
 * 1.所有数字（包括 target）都是正整数。
 * 2.解集不能包含重复的组合。 
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//不怎么优雅地勉强实现
var combinationSum = function (candidates, target) {
    let temp = [...new Set(candidates)];
    temp.sort((a, b) => a - b);
    let result = [];
    function analyze(num, arr = []) {
        for (let i = 0; i < temp.length; i++) {
            let r = num - temp[i];
            if (r >= temp[0]) {
                analyze(r, [...arr, temp[i]]);
            } else if (r === 0) {
                result.push([temp[i], ...arr].sort((a, b) => a - b));
                return;
            } else if (r < 0) {
                return;
            }
        }
    }
    analyze(target);
    return arrUnique(result);
};
var arrUnique = function (arr, obj = {}) {
    return arr.filter((item) => (
        obj.hasOwnProperty(item) ? false : (obj[item] = true)
    ));
};


//优化
var combinationSum = function (candidates, target) {
    let temp = [...new Set(candidates)];
    temp.sort((a, b) => b - a);
    let len = temp.length,
        min = temp[len - 1],
        result = [],
        path = [];

    function analyze(num, start = 0, path = []) {
        if (num === 0) return result.push(path.slice());
        if (num < min) return;

        for (let i = start; i < len; i++) {
            path.push(temp[i]);
            analyze(num - temp[i], i, path);
            path.pop();
        }
    }
    analyze(target, 0, path);
    return result;
};
