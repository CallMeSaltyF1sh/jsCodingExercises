/**
 * Problem desc:
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点构成的。
 */
 
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let node = new ListNode(null),
        head = node;
    
    while(l1 && l2) {
        if(l1.val < l2.val) {
            node.next = l1;
            l1 = l1.next;
        } else {
            node.next = l2;
            l2 = l2.next;
        }
        node = node.next;
    }
    
    while(l1){
        node.next = l1;
        l1 = l1.next;
        node = node.next;
    }
    while(l2){
        node.next = l2;
        l2 = l2.next;
        node = node.next;
    }
    
    return head.next;
};
