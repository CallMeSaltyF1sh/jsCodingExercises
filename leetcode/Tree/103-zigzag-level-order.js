/**
 * Problem desc:
 * 给定一个二叉树，返回其节点值的锯齿形层次遍历。
 * 即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行。
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    let res = [];
    function traverse(root, index) {
        if (!res[index]) {
            res[index] = [root.val];
        } else {
            index % 2 ? res[index].unshift(root.val) : res[index].push(root.val);
        }
        if (root.left) traverse(root.left, index + 1);
        if (root.right) traverse(root.right, index + 1);
    }
    traverse(root, 0);
    return res;
};