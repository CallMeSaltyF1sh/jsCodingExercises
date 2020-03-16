/**
 * Problem desc:
 * 字符串压缩。
 * 利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。
 * 比如，字符串aabcccccaaa会变为a2b1c5a3。
 * 若“压缩”后的字符串没有变短，则返回原先的字符串。
 * 你可以假设字符串中只包含大小写英文字母（a至z）。
 */

/**
 * @param {string} S
 * @return {string}
 */
//1
var compressString = function (S) {
    let arr = S.split(''),
        cnt = 1;
    for (let i = 1, len = S.length; i < len; i++) {
        cnt = 1;
        while (arr[i - 1] === arr[i]) {
            cnt++;
            i++;
        }
        arr.splice(i - cnt + 1, cnt - 1, cnt);
        i = cnt === 1 ? i + 1 : i - cnt + 2;
        len = len - cnt + 2;
    }
    if (isNaN(arr[arr.length - 1])) arr.push('1');
    return arr.join('').length >= S.length ? S : arr.join('');
};

//2不转数组
var compressString = function (S) {
    let str = '',
        temp = '',
        cnt = 1;
    for (let c of S) {
        if (!temp) {
            temp = c;
            str = c;
            continue;
        }
        if (c === temp) {
            cnt++;
        } else {
            str = str + cnt + c;
            cnt = 1;
            temp = c;
        }
    }
    str += cnt;
    return str.length >= S.length ? S : str;
}