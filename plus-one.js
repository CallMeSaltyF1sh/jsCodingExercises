/**
 * Problem desc:
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。最高位数字存放在数组的首位，数组中每个元素只存储单个数字。
 * 假设除0之外，这个整数不会以零开头。
 */
 
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let flag,
        len = digits.length;
    if(++digits[len - 1] < 10) return digits;
    
    flag = true;
    digits[len - 1] = 0;
    for(let i = len - 2; i >= 0 && flag === true; i--) {
        if(++digits[i] === 10) digits[i] = 0;
        else flag = false;
    } 
        
    if(flag) {
        digits[0] = 0;
        digits.unshift(1);
    }
        
    return digits;
};
