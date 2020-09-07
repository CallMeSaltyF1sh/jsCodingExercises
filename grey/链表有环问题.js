/**
 * 判断链表有环
 * 设置两个指针p1,p2; p1每次往前移一位, p2往前移两位
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
function hasCycle(head) {
    let p1 = head,
        p2 = head;
    while(p2 && p2.next) {
        p1 = p1.next;
        p2 = p2.next.next;
        if(p1 === p2) {
            return true;
        }
    }
    return false;
}

/**
 * 求环长
 * 从p1,p2第一次相遇开始计算循环的次数直至再次相遇
 */
function cycleLength(head) {
    let p1 = head,
        p2 = head;
    let cnt = 0,
        flag = false;
    while(p2 && p2.next) {
        p1 = p1.next;
        p2 = p2.next.next;
        if(!flag) {
            p1 === p2 && (flag = true);
            continue;
        }  
        cnt++;
        if(p1 === p2) break;
    }
    return cnt;
}

/**
 * 求入环节点
 * D:要求的起点到入环点的距离, S1:入环点到首次相遇点的距离, S2:首次相遇点到入环点的距离
 * p1走的距离=D+S1, P2走的距离=D+S1+n(S1+S2) n是p2比p1多走的圈数
 * 由于p2走的总距离是p1的二倍，所以D=(n-1)(S1+S2)+S2
 * 可以把一个指针放在起点，另一个放在首次相遇点，两个指针都是每次走1步，最终相遇的节点就是入环节点
 */
function getEnterPoint(head) {
    let p1 = head,
        p2 = head;
    while(p2 && p2.next) {
        p1 = p1.next;
        p2 = p2.next.next;
        if(p1 === p2) {
            break;
        }
    }
    p1 = head;
    while(p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
}