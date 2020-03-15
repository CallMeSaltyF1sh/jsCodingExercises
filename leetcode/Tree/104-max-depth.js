/**
 * Problem desc:
 * 给定一个二叉树，找出其最大深度。
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
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
var maxDepth = function (root) {
    if (!root) return 0;
    let cnt = 0;
    function traverse(root, level) {
        if (root.left) traverse(root.left, level + 1);
        if (root.right) traverse(root.right, level + 1);
        cnt = level > cnt ? level : cnt;
    }
    traverse(root, 1);
    return cnt;
};
