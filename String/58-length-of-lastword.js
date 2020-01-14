/*
 * Problem desc:
 * 给定一个仅包含大小写字母和空格' '的字符串s，返回其最后一个单词的长度
 * 如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词
 * 如果不存在最后一个单词返回0
 * 说明：一个单词是指仅由字母组成、不包含任何空格的最大子字符串。
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trimStart().trimEnd();
    if(s.includes(' ')) 
        return s.substring(s.lastIndexOf(' ') + 1).length;
    else
        return s.length;
};