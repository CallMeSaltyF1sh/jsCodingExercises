/**
 * Problem desc:
 * 给你一份『词汇表』（字符串数组） words 和一张『字母表』（字符串） chars。
 * 假如你可以用 chars 中的『字母』（字符）拼写出 words 中的某个『单词』（字符串），那么我们就认为你掌握了这个单词。
 * 注意：每次拼写时，chars 中的每个字母都只能用一次。
 * 返回词汇表 words 中你掌握的所有单词的 长度之和。
 */

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    let cnt = 0;
    function check(word) {
        let temp = chars;
        for (let letter of word) {
            if ((index = temp.indexOf(letter)) !== -1) {
                temp = temp.substring(0, index) + temp.substring(index + 1, temp.length);
            } else {
                return;
            }
        }
        cnt += word.length;
    }
    words.forEach(word => {
        check(word);
    });
    return cnt;
};