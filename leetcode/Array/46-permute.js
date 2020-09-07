/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    if (!nums.length) {
        return [];
    }

    function permutation(arr) {
        if (arr.length === 1) {
            return [arr];
        }
        const result = [];
        const item = arr[0];
        const temp = permutation(arr.slice(1));
        for (let i = 0, len = temp.length; i < len; i++) {
            const m = temp[i];
            for (let j = 0, l = m.length; j <= l; j++) {
                result.push(m.slice(0, j).concat(item, m.slice(j)));
            }
        }
        return result;
    }

    return Array.from(new Set(permutation(nums)));
};