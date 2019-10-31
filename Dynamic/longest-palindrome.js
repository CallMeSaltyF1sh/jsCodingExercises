/**
 * Problem desc:
 * 给定一个字符串s，找到s中最长的回文子串。假设s的最大长度为 1000。
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(!s) return '';
    
    let n = s.length;
    if(n === 1) return s;
    else if(n === 2) return s[0] === s[1] ? s : s[0];
    else {
        let len = 0,
            start = 0,
            end = 0;
        for(let i=0; i<n; i++) {
            len = Math.max(getLen(s, i, i), getLen(s, i, i+1));
            if(len > end - start + 1) {
                start = Math.ceil(i - (len - 1) / 2);
                end = i + Math.floor(len / 2);
            }
        }
        
        return s.substring(start, end + 1);        
    }
};

var getLen = function(str, start, end) {
    while(start >= 0 && end < str.length && str[start] === str[end]) {
        start --;
        end ++;
    } 
    return end - start - 1;
};
