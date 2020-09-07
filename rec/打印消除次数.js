/**
 * 相邻字符相同可消除，消除后合并
 */
function search(str, cnt = 0) {
    let i = 0;
    for (i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) break;
    }
    if (i >= str.length) return cnt;
    return search(str.slice(0, i - 1) + str.slice(i + 1), cnt + 1);
}

const arr = ['43211234', '101', '123443556'];
arr.forEach(item => {
    console.log(search(item));
});
