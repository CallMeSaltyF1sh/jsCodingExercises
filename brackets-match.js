/**
 * Problem desc:
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：左括号必须用相同类型的右括号闭合；左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 */
 
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(!s) return true;
    
    let symbolMap = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    };
    
    let tempArr = [];
    for(let c of s) {
        if(c in symbolMap) {
            tempArr.push(c);
        } else {
            if(c !== symbolMap[tempArr.pop()]) return false;
        }
    }
    
    if(tempArr.length !== 0) return false;
    return true;
};
