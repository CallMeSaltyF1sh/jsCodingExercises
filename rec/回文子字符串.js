/**
 * 输出回文子字符串数
 */
const str = readline();
const len = str.length;
let cnt = 0;
function check(str) {
    let len = str.length;
    let mid = Math.floor(len / 2);
    for(let p = 0; p<mid; p++) {
        if(str.substr(p, 1) !== str.substr(len - p - 1, 1)) {
            return false;
        }
    }
    return true;
}

for(let p1 = 0; p1 < len - 1; p1++) {
    for(let p2 = p1 + 2; p2 <= len; p2++) {
        const s = str.substring(p1, p2);
        if(check(s)) {
            cnt++;
        }
    }
}

print(cnt);