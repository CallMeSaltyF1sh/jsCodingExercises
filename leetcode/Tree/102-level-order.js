/**
 * Problem desc:
 * 层次遍历
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
var levelOrder = function (root) {
    if (!root) return [];
    let res = [];
    function traverse(root, index) {
        if (!res[index]) {
            res[index] = [root.val];
        } else {
            res[index].push(root.val);
        }
        if (root.left) traverse(root.left, index + 1);
        if (root.right) traverse(root.right, index + 1);
    }
    traverse(root, 0);
    return res;
};