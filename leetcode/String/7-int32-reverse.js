/**
 * Problem desc:
 * 给出一个32位的有符号整数，将这个整数中每位上的数字进行反转然后输出，符号不变。
 * 比如：123 -> 321；-123 -> -321；210 -> 12
 */
/**
 * @param {number} x
 * @return {number}
 */
 
var reverse = function(x) {
    if(x === 0) {
        return 0;
    }
    
    let str = x.toString();
    let result = 0;
    
    if(str[0] !== '-') {
        result = parseInt(str.split('').reverse().join(''));
    } else {
        result = parseInt('-'.concat(str.split('').reverse().join('').slice(0, -1)));
    }
    
    return (result > 2147483647 || result < -2147483648) ? 0 : result;
};
