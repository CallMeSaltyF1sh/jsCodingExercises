/**
 * Problem desc:
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合；
 * candidates 中的每个数字在每个组合中只能使用一次。
 * 说明：
 * 1.所有数字（包括 target）都是正整数。
 * 2.解集不能包含重复的组合。
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//拿上一个稍微改了一点
var combinationSum2 = function (candidates, target) {
    let temp = candidates.slice();
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
            analyze(num - temp[i], i + 1, path);
            path.pop();
        }
    }
    analyze(target, 0, path);
    return arrUnique(result);
};
var arrUnique = function (arr, obj = {}) {
    return arr.filter((item) => (
        obj.hasOwnProperty(item) ? false : (obj[item] = true)
    ));
};


//把最后用Set去重改成循环的时候加判断条件防止重复
var combinationSum2 = function (candidates, target) {
    let temp = candidates.slice();
    temp.sort((a, b) => b - a);
    let len = temp.length,
        min = temp[len - 1],
        result = [],
        path = [];

    function analyze(num, start = 0, path = []) {
        if (num === 0) return result.push(path.slice());
        if (num < min) return;

        for (let i = start; i < len; i++) {
            if ((temp[i] === temp[i - 1]) && i > start) continue;
            path.push(temp[i]);
            analyze(num - temp[i], i + 1, path);
            path.pop();
        }
    }
    analyze(target, 0, path);
    return result;
};