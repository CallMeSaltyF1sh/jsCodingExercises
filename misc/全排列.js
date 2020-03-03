/**
 * 针对数字数组的全排列
 * @param {Array} arr 
 * @param {boolean} unique 是否去重
 */
function permutationWrapper(arr, unique = true) {
    if (!Array.isArray(arr)) return;

    function permutation(arrStr) {
        let result = []
        if (arrStr.length === 1) {
            return [arrStr];
        }
        let item = arrStr.slice(0, 1);
        let preArr = permutation(arrStr.slice(1));
        for (let i = 0; i < preArr.length; i++) {
            for (let j = 0; j <= preArr[i].length; j++) {
                result.push(preArr[i].slice(0, j) + item + preArr[i].slice(j));
            }
        }
        return result;
    }
    let result = permutation(arr.join(''));
    if (unique) result = [...new Set(result)];
    return result.map(item => item.split('').map(i => Number(i)));
}
//test
console.log(permutationWrapper([1, 1, 2, 3]));