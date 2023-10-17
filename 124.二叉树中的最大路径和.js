/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
 * 最大路径和未左右节点路径和相加
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxPath=-1000
    let traverse=function (root){
        if(root==null){
            return 0
        }
        //判断左右节点的深度，哪个深度更大返回哪个
        //左节点最大路径和 当和未负数时，则不添加
        let leftMax=Math.max( traverse(root.left)  ,0)
        //右节点最大路径
        let rightMax=Math.max(traverse(root.right) ,0)
        let myMaxPath = leftMax+rightMax+root.val
        maxPath = Math.max(myMaxPath, maxPath)
        //返回一边路径的最大值
        return Math.max(leftMax,rightMax)+root.val
    }
    traverse(root)
    return maxPath

};
// @lc code=end

