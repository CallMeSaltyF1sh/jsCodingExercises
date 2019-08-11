/**
 * Problem desc:
 * 给定一个整数，将其转为罗马数字。输入确保在 1 到 3999 的范围内。
/**
 * @param {number} num
 * @return {string}
 */
 
var intToRoman = function(num) {
    if(num < 1 || num > 3999) {
        return '';
    }
       
    const list = [['I', 'V'],['X','L'],['C','D'],['M']];
    let str = num.toString().split('');
    let result = '',
        n = 0,
        index = 0;
    
    for(let i = 0; i < str.length; i++) {
        index = str.length - 1 - i;
        n = parseInt(str[i]);
        
        if(n < 4) {
            result += list[index][0].repeat(n);
        } else if (n === 4) {
            result += (list[index][0] + list[index][1]);
        } else if (n < 9) {
            result += (list[index][1] + list[index][0].repeat(n - 5));
        } else {
            result += (list[index][0] + list[index + 1][0]);
        }
    }
    
    return result;
};
