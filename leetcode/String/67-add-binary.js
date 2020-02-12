/*
 * Problem desc:
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 输入为非空字符串且只包含数字1和0。
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1,
        j = b.length - 1,
        flag = 0,
        result = [],
        temp = 0;
    
    while(i >= 0 || j >= 0) {
        temp = (a[i] ? parseInt(a[i]) : 0) + (b[j] ? parseInt(b[j]) : 0) + flag;
        flag = temp > 1 ? 1 : 0;
        
        switch(temp) {
            case 0:
                result.unshift(0);
                flag = false;
                break;
            case 1:
                result.unshift(1);
                flag = false;
                break;
            case 2:
                result.unshift(0);
                flag = true;
                break;
            case 3:
                result.unshift(1);
                flag = true;
                break;
        }
        
        i--;
        j--;
    }
    
    if(flag) result.unshift(1);
    
    return result.join('');
};