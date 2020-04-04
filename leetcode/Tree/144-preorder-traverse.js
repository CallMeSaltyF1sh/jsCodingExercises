/**
 * 使用非递归法前序遍历二叉树
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let res = [],
        stack = [],
        node = root;
    while (stack.length || node) {
        while (node) {
            res.push(node.val);
            stack.push(node);
            node = node.left;
        }
        if (stack.length) {
            node = stack.pop();
            node = node.right;
        }
    }
    return res;
};