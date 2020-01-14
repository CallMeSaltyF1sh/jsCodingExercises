/**
 * Problem desc:
 * 编写一个函数来查找字符串数组中的最长公共前缀；如果不存在公共前缀，返回空字符串""。
/**
 * @param {string[]} strs
 * @return {string}
 */
 
var longestCommonPrefix = function(strs) {
    if(!strs) return '';
    if(strs.length === 1) return strs[0];
    
    strs = strs.sort((a, b) => a.length > b.length);
    if(!strs[0]) return '';
    
    let s = strs[0];
    let common = '';
    for(let i = 0; i < s.length; i++) {
        for(var j = 1; j < strs.length; j++) {
            if(s[i] !== strs[j][i])
                break;
        }
        if(j === strs.length) common += s[i];
        else break;
    }
    
    return common;
};
