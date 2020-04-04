/**
 * 给定一个N叉树，返回其节点值的层序遍历。
 */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    let res = [];
    function traverse(root, level) {
        if (!res[level]) res[level] = [root.val];
        else res[level].push(root.val);

        if (root.children) {
            root.children.forEach(child => {
                traverse(child, level + 1);
            })
        }
    }
    traverse(root, 0);
    return res;
};