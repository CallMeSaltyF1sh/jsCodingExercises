/**
 * Problem desc:
 * 合并k个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 */
 
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 
 //方法一：两两递归合并；时间复杂度：O(kN)；空间复杂度：O(1)
var mergeKLists = function(lists) {
    if(lists.length === 0) return null;
    else if(lists.length === 1) return lists[0];
    
    let node = null,
        head = null,
        i = 1;
    
    let merge = function(l1, l2) {
        if(i < lists.length) {
            node = new ListNode(null);
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
            
            if(i < lists.length - 1) merge(head.next, lists[++i]);
        }
        
        else return;
    };
    
    merge(lists[0], lists[1]);
    return head.next;
};

//方法二：归并排序；时间复杂度：O(NlogK)；空间复杂度：O(1)
var mergeKLists = function(lists) {
    switch(lists.length) {
        case 0:
            return null;
        case 1:
            return lists[0];
        case 2:
            return merge2(lists[0], lists[1]);
        default: 
            return merge2(mergeKLists(lists.slice(0, lists.length >> 1)), mergeKLists(lists.slice(lists.length >> 1, lists.length)));
    }
};

let merge2 = function(l1, l2) {
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
