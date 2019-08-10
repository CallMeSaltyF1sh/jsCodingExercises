/**
 * Problem desc:
 * 请你来实现一个atoi函数，使其能将字符串转换成整数。
 * 该函数会丢弃开头无用的空格字符，直到寻找到第一个非空格的字符为止；
 * 当寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来；
 * 若第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。
 * 若该字符串有效的整数部分之后存在多余的字符，这些字符被忽略。
 * 若该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符，不需要转换。
 * 在任何情况下，若函数不能进行有效的转换，直接返回0。
 * 返回值的大小需要控制在int32的范围内，若有超出则返回int32的最大/最小值。
/**
 * @param {string} str
 * @return {number}
 */
 
var myAtoi = function(str) {
    str = str.trim();
    let result = '';
    
    if(str[0] >= '0' && str[0] <= '9') {
        for(let c of str) {
            if(c >= '0' && c <= '9') {
                result += c;
            } else {
                break;
            }
        }
        return result ? (parseInt(result) > 2147483647 ? 2147483647 : parseInt(result)) : 0;
        
    } else if (str[0] === '-' || str[0] === '+') {
        for(let i=1; i<str.length; i++) {
            if(str[i] >= '0' && str[i] <= '9') {
                result += str[i];
            } else {
                break;
            }
        }
        switch(str[0]) {
            case '-':
                return result ? (-parseInt(result) < -2147483648 ? -2147483648 : -parseInt(result)) : 0;
            case '+':
                return result ? (parseInt(result) > 2147483647 ? 2147483647 : parseInt(result)) : 0;
        }
        
    } else {
        return 0;
    }
    
};
