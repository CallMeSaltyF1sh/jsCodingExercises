/**
 * Problem desc:
 * 给定一个链表，旋转链表，将链表每个节点向右移动k个位置（循环右移），其中k是非负数。
 */
 
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head === null) return null;
    
    let n = 1,
        i = 0,
        p = head;
    
    while(p.next) {
        n ++;
        p = p.next;
    }
    p.next = head;
    
    p = head;
    while(i < n - k%n - 1) {
        p = p.next;
        i ++;
    }
    
    head = p.next;
    p.next = null;
    
    return head;
};
