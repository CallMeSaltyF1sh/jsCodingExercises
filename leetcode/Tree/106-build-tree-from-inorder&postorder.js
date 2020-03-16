/**
 * Problem desc:
 * 根据一棵树的中序遍历与后序遍历构造二叉树。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    if (!inorder.length) return null;
    let val = postorder[postorder.length - 1],
        index = inorder.indexOf(val),
        root = new TreeNode(val);
    root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index));
    root.right = buildTree(inorder.slice(index + 1), postorder.slice(index, postorder.length - 1));
    return root;
};