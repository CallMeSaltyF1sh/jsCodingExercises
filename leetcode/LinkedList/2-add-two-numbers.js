/**
 * Problem desc:
 * 传入两个非空的链表表示两个非负的整数。其中，它们各个位的数字是逆序存储的，并且每个节点只能存储一位数字。
   现将这两个数相加起来，返回一个新的链表（同样是逆序存储）来表示它们的和。
   假设除了数字 0 之外，这两个数都不会以 0 开头。 
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

var addTwoNumbers = function(l1, l2) {
    if(!l1){
        return l2;
    }else if(!l2){
        return l1;
    }
    
    let node = new ListNode(null);
    let head = node;
    let sum = 0,
        flag = 0;
    
    while(l1 || l2) {
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + flag;
        flag = Math.floor(sum / 10);
        sum = sum % 10;
        node.next = new ListNode(sum);
        node = node.next;
        
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    
    if(flag) {
        node.next = new ListNode(flag);
    }
    
    return head.next;
}
