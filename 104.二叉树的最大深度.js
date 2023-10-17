/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 遍历二叉树，并返回对应的深度
 * @param {*} node 
 * @param {*} depth 
 */
let traverse=function(root,depth){
    if(root==null){
        return depth
    }
    depth++
    //判断左右节点的深度，哪个深度更大返回哪个
    let leftDepth=traverse(root.left,depth)
    let rightDepth=traverse(root.right,depth)
    return leftDepth>rightDepth?leftDepth:rightDepth
}


/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let depth=traverse(root,0)
    return depth

};
// @lc code=end

