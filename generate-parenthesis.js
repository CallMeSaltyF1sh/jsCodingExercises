/**
 * Problem desc:
 * 给出n代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 */
 
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let arr = [];
    
    let create = function(str, open, close) {
        if(str.length === n * 2) {
            arr.push(str);
            return;
        }

        if(open < n) create(str+'(', open+1, close);
        if(close < open) create(str+')', open, close+1);
    };
    
    create('', 0, 0);
    return arr;
};
