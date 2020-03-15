/**
 * Problem desc:
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 * 本题中，一棵高度平衡二叉树定义为：
 * 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
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
 * @return {boolean}
 */
//避坑->left和right不要放外面定义...
var isBalanced = function (root) {
    if (!root) return true;
    let flag = true;
    function traverse(root, level, left, right) {
        if (!flag) return;
        if (!root.left && !root.right) return level;

        if (root.left) left = traverse(root.left, level + 1, level + 1, level + 1);
        if (root.right) right = traverse(root.right, level + 1, level + 1, level + 1);
        if (Math.abs(left - right) > 1) {
            flag = false;
            return;
        }
        return left > right ? left : right;
    }
    traverse(root, 0, 0, 0);
    return flag;
};