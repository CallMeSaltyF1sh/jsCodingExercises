/**
 * Problem desc:
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。不是单纯的改变节点内部的值，而是需要进行节点交换。
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
 * @return {ListNode}
 */
 
 //递归法
var swapPairs = function(head) {
    if(!head || !head.next) {
        return head;
    }
    let next = head.next;
    head.next = swapPairs(next.next);
    next.next = head;
    return next;
};

//非递归法
var swapPairs = function(head) {
    let node = new ListNode(null),
    let sign, prev, next;
    
    node.next = head;
    sign = node;
    while(node.next && node.next.next) {
        prev = node.next;
        next = prev.next;
        node.next = next;
        prev.next = next.next;
        next.next = prev;
        node = prev;
    }
    
    return sign.next;
}
