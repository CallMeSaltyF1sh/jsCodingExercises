/**
 * Problem desc:
 * 给定一个字符串，请你找出其中不含有重复字符的最长子串的长度。
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let tempStr = '';
    let maxlen = 0,
        len = 0,
        idx = 0;
    
    for(let c of s) {
        if(!tempStr.includes(c)) {
            tempStr = tempStr.concat(c);
            len++;
        } else {
            if(len > maxlen) maxlen = len;
            idx = tempStr.indexOf(c) + 1;
            tempStr = (tempStr.length === idx) ? '' : tempStr.substring(idx);
            tempStr = tempStr.concat(c);
            len = tempStr.length;
        }
    }
    
    if(len > maxlen) maxlen = len;
    
    return maxlen;   
};
