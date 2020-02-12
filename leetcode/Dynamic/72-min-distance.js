/**
 * Problem desc:
 * 给定两个单词word1和word2，计算出将word1转换成word2所使用的最少操作数。
 * 你可以对一个单词进行如下三种操作：
 * 插入一个字符、删除一个字符、替换一个字符
 */

 /**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const len1 = word1.length,
          len2 = word2.length;

    if(!len1 || !len2) {
        return Math.max(len1, len2);
    }
    let arr = [], 
        i, j;
    
    //init
    for(i=0; i<=len1; i++) {
        arr[i] = [];
        arr[i][0] = i;
    }
    for(j=0; j<=len2; j++) {
        arr[0][j] = j;
    }

    for(i=0; i<len1; i++) {
        for(j=0; j<len2; j++) {
            if(word1[i] === word2[j]) {
                arr[i+1][j+1] = arr[i][j];
            } else {
                arr[i+1][j+1] = Math.min(arr[i][j], arr[i][j+1], arr[i+1][j]) + 1;
            }
        }
    }

    return arr[i][j];
};