/**
 * 输出含有的a、b、c、x、y、z均为偶数个的最长子字符串长度
 */
const str = 'amabc';
const dict = 'abcxyz';
let maxLen = 0;

function check(str) {
    let res = {};
    for(let c of str) {
        if(dict.indexOf(c) !== -1) {
            if (!res[c]) res[c] = 1;
            else res[c] = res[c] + 1;
        } 
    }
    for(let key in res) {
        if(res[key] % 2) return false;
    }
    return true;
}

for(let p1 = 0, len=str.length; p1 < len - 1; p1++) {
    for(let p2 = p1 + 2; p2 <= len; p2++) {
        const s = str.substring(p1, p2);
        if(s.length > maxLen && check(s)) {
            maxLen = s.length;
        }
    }
}

console.log(maxLen);