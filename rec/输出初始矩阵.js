/**
 * 每次把上一个矩阵反转并拼接形成新矩阵
 * 输出初始矩阵
 */
const n = 8;
const m = 3;

function check(arr) {
    const len = arr.length;
    const mid = len / 2 -1;
    for(let i=0; i<= mid; i++) {
        if(arr[i] !== arr[len - i - 1]) {
            return false;
        }
    }
    return true;
}

function getOriginalArr(arr = []) {
    if(check(arr)) {
        return getOriginalArr(arr.slice(0, arr.length / 2));
    } else {
        return arr;
    }
}

console.log(getOriginalArr(['101','010','010','101','101','010','010','101']))