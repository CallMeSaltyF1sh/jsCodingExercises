/**
 * N组事件，求侦探最大收益
 * arr每个元素是个数组，其中的值分别代表该事件收益、几天能干完、要求几天内干完
 */
const n = 3;
const arr = [[8,3,4],[4,1,2],[6,2,2]];
const rec = {};
let money = 0;
for(let i=0; i<n; i++) {
    //let [a, b, c] = read_line().split(' ').map(s => +s);
    let [a,b,c] = arr[i];
    const restDay = c - b;
    if(restDay < 0) continue;

    const curr = rec[restDay];
    if(restDay === 0) {
        money = a > money ? a : money;
        continue;
    }  
    if(restDay > 0) {
        let p = restDay;
        while(p) {
            if(rec[p]) {
                const tmp = rec[restDay] + a;
                money = tmp > money ? tmp : money;
            }
            p--;
        }
    }
    if(!curr || a > +curr) {
        rec[restDay] = a;
    } 
}

console.log(money);