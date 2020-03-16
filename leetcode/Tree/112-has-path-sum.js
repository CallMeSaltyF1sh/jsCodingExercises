/**
 * Problem desc:
 * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    if (!root) return false;
    let flag = false;
    function traverse(root, cnt) {
        if (flag) return;
        if (cnt === sum && !root.left && !root.right) {
            flag = true;
            return;
        }
        if (root.left) traverse(root.left, cnt + root.left.val);
        if (root.right) traverse(root.right, cnt + root.right.val);
    }
    traverse(root, root.val);
    return flag;
};