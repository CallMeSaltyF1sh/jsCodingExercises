/**
 * Problem desc:
 * 计算给定二叉树的所有左叶子之和。
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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    if (!root) return 0;
    let cnt = 0;
    function traverse(root, sign) {
        if (!root.left && !root.right) {
            if (!sign) cnt += root.val;
            return;
        }
        if (root.left) traverse(root.left, 0);
        if (root.right) traverse(root.right, 2);
    }
    traverse(root, 1);
    return cnt;
};