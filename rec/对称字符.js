/**
 * 类似a-z或b-y为对称字符
 * 输出字符串中的对称字符对数
 */
const dict = 'abcdefghijklmnopqrstuvwxyz';

function judge(str = '') {
    let cnt = 0;
    let tmp = [];
    for(let c of str) {
        if(!tmp.includes(c)) {
            const index = dict.indexOf(c);
            const match = dict[25 - index];
            if(str.indexOf(match) !== -1) {
                cnt++;
                tmp.push(c, match);
            }
        }
    }
    return cnt;
}

console.log(judge('aabqzyw'))