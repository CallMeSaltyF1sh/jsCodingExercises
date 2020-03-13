/**
 * Problem desc:
 * 给定一个二叉树，检查它是否是镜像对称的。
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
var isSymmetric = function (root) {
    function compare(r1, r2) {
        if (r1 === null && r2 === null) return true;
        if (r1 === null || r2 == null) return false;
        return r1.val === r2.val && compare(r1.left, r2.right) && compare(r1.right, r2.left);
    }
    return compare(root, root);
};