/**
 * Problem desc:
 * 给定一个二叉树，找出其最小深度。
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
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
var minDepth = function (root) {
    if (!root) return 0;
    let min = 0;
    function traverse(root, level) {
        if (!root.left && !root.right) {
            min = !min ? level : (level < min ? level : min);
            return;
        }
        if (root.left) traverse(root.left, level + 1);
        if (root.right) traverse(root.right, level + 1);
    }
    traverse(root, 1);
    return min;
};
