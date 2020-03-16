/**
 * Problem desc:
 * 翻转二叉树。
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) return root;
    function invert(root) {
        [root.left, root.right] = [root.right, root.left];
        if (root.left) invert(root.left);
        if (root.right) invert(root.right);
    }
    invert(root);
    return root;
};