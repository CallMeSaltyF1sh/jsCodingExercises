/**
 * Problem desc:
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合；给出数字到字母的映射与电话按键相同，注意1不对应任何字母。
 */
 
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let list = [['a','b','c'], ['d','e','f'], ['g','h','i'], ['j','k','l'], ['m','n','o'], ['p','q','r','s'], ['t','u','v'], ['w','x','y','z']];
    
    let reg = new RegExp('1', 'g');
    digits = digits.replace(reg, '');
    if(!digits) return [];
    if(digits.length === 1) return list[parseInt(digits[0])-2];
    
    let result = [],
        temp0 = [],
        temp1 = [];
    
    temp0 = list[parseInt(digits[0])-2];
    
    for(let index = 1; index < digits.length; index++) {
        result = [];
        for(let i=0; i<temp0.length; i++) {
            temp1 = list[parseInt(digits[index])-2];
            for(let j=0; j<temp1.length; j++) {
                result.push(temp0[i] + temp1[j]);
            }
        }
        temp0 = [...result];
    }
    
    return result;
};

//更JS的方法，用reduce和map
var letterCombinations = function(digits) {
    let list = [['a','b','c'], ['d','e','f'], ['g','h','i'], ['j','k','l'], ['m','n','o'], ['p','q','r','s'], ['t','u','v'], ['w','x','y','z']];
    
    let reg = new RegExp('1', 'g');
    digits = digits.replace(reg, '');
    if(!digits) return [];
    if(digits.length === 1) return list[parseInt(digits[0])-2];
 
    let letters = digits.split('').map(item => {
        return list[parseInt(item)-2];
    });
    let result;
    
    return letters.reduce((a,b) => {
        result = [];
        a.map(item0 => {
            b.map(item1 => {
                result.push(item0 + item1);
            });
        });
        return result;
    });
 }
