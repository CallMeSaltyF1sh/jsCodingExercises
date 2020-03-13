/**
 * Problem desc:
 * 对于字符串 S 和 T，只有在 S = T + ... + T（T 与自身连接 1 次或多次）时，我们才认定 “T 能除尽 S”。
 * 返回最长字符串 X，要求满足 X 能除尽 str1 且 X 能除尽 str2。
 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    if ((str1 + str2) !== (str2 + str1)) return '';
    let len1 = j = str1.length,
        len2 = k = str2.length,
        i = gcd(len1, len2),
        s = temp1 = temp2 = '';
    while (i) {
        s = str1.slice(0, i);
        j = j / i;
        k = k / i;
        while (j && k) {
            temp1 += s;
            temp2 += s;
            j--;
            k--;
        }
        while (j) {
            temp1 += s;
            j--;
        }
        while (k) {
            temp2 += s;
            k--;
        }
        if (temp1 === str1 && temp2 === str2) return s;
        i--;
    }
};

var gcd = function (a, b) {
    let min = a > b ? b : a,
        max = a > b ? a : b;
    return min === 0 ? max : gcd(min, max % min);
};