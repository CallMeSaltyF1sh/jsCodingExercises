/**
 * 一个二叉树n条边，每个节点有不同编号
 * 给出每条边的两节点id及方向（left或right）
 * 有两个叶子节点的子树形似樱桃
 * 输出樱桃数目
 */
const [m, n] = readline().split(' ').map(i => +i);
const parents = [];
const rec = {};
let lastID = 0;
for(let i=0; i<n; i++) {
    let [selfID, direction, childID] = readline().split(' ');
    if(lastID !== selfID) parents.push(selfID);
    if(!rec[selfID]) {
        rec[selfID] = [childID];
    } else {
        rec[selfID].push(childID);
    }   
    lastID = selfID;
}

let cnt = 0;
for(let key in rec) {
    const childs = rec[key];
    if(childs && childs.length === 2 && childs.every(child => !parents.includes(child))) {
        cnt++;
    }
}
print(cnt);