/**
 * Problem desc:
 * 给定一个链表，删除链表的倒数第n个节点，并且返回链表的头结点。
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let node0 = head,
        node1 = head;
    
    for(let i = 0; i < n; i++) {
        node0 = node0.next;
    }
    if(!node0) return head.next;
    
    while(node0.next) {
        node0 = node0.next;
        node1 = node1.next;
    }
    node1.next = node1.next.next;
    
    return head;
};
