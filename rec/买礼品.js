/**
 * 买礼品，礼品从小到大排列
 * 需要买大小相似的礼品（即选择的礼品是连续的）
 * 礼品店一共n个礼品，需要买m个，且每个礼品花费不能超过k
 * 输出可购买的礼品组合数
 */
const n = 8;
const m = 2;
const k = 5;
const arr = [5,5,5,4,5,5,5,5];

let cnt = 0;
for(let i=0; i<=n-m; i++) {
    if(arr[i] < k) continue;
    let j = i+1;
    let tmp = 1;
    while(arr[j] >= k && tmp < m) {
        j++;
        tmp++;
    }
    if(tmp === m) {
        cnt++;
    } else {
        i = j;
    }
}

console.log(cnt)