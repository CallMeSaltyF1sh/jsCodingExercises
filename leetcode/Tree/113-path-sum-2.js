/**
 * Problem desc:
 * 给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。
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
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    if (!root) return [];
    let res = [];
    function traverse(root, arr) {
        if (!root.left && !root.right) {
            arr = [...arr, root.val];
            if (arr.reduce((a, b) => a + b, 0) === sum) {
                res.push(arr);
            }
            return;
        }
        if (root.left) traverse(root.left, [...arr, root.val]);
        if (root.right) traverse(root.right, [...arr, root.val]);
    }
    traverse(root, []);
    return res;
};