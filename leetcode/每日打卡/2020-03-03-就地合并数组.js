/**
 * Problem desc:
 * 给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B； 
 * 编写一个方法，将 B 合并入 A 并排序；
 * 初始化 A 和 B 的元素数量分别为 m 和 n。
 * Input: A = [1,2,3,0,0,0], m = 3
          B = [2,5,6],       n = 3
 * Output: [1,2,2,3,5,6]
 */

/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
//偷懒了，感觉其实不该用splice...但是真好用而且快😶
var merge = function (A, m, B, n) {
    let j = 0;
    for (let i = 0; i < m + j; i++) {
        if (A[i] > B[j]) {
            A.splice(-1);
            A.splice(i, 0, B[j++]);
        }
    }
    if (j < n) {
        A.splice(m + j, n - j, ...B.slice(j));
    }
};

//强行重写，果然比用splice慢一点
var merge = function (A, m, B, n) {
    let j = 0;
    for (let i = 0; i < m + j; i++) {
        if (A[i] > B[j]) {
            insertArr(i, [B[j]], A, m + j);
            j++;
        }
    }
    if (j < n) {
        insertArr(m + j, B.slice(j), A, m + j);
    }
};
//这里默认arr后面的缓冲区够长
var insertArr = function (index, items, arr, len) {
    const addLen = items.length;
    for (let i = len - 1; i >= index; i--) {
        arr[i + addLen] = arr[i];
    }
    for (let i = 0; i < addLen; i++) {
        arr[index + i] = items[i];
    }
    return arr;
};