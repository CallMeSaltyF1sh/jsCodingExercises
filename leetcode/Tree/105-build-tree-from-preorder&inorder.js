/**
 * Problem desc:
 * 根据一棵树的前序遍历与中序遍历构造二叉树。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!inorder.length) return null;
    let val = preorder[0],
        index = inorder.indexOf(val),
        root = new TreeNode(val);
    root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
    root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
    return root;
};