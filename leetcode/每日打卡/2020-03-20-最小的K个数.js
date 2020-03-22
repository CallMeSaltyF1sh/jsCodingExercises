/**
 * Problem desc:
 * 输入整数数组 arr ，找出其中最小的 k 个数。
 * 例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
    let temp = arr.slice(0, k);
    for (let i = k, len = arr.length; i < len; i++) {
        let max = Math.max(...temp);
        if (arr[i] < max) temp[temp.indexOf(max)] = arr[i];
    }
    return temp;
};