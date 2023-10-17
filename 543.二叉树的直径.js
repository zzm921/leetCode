/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * 路径的长度可以理解为，左节点最高深度+右节点最高深度
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let maxDiameter =0
    let traverse=function (root){
        if(root==null){
            return 0
        }
        //判断左右节点的深度，哪个深度更大返回哪个
        //左节点最大数量
        let leftMax=traverse(root.left)  
        //右节点最大数量 
        let rightMax=traverse(root.right) 
        let myDiameter = leftMax + rightMax;
        maxDiameter = Math.max(maxDiameter, myDiameter)
        //返回最长深度
        return Math.max(leftMax,rightMax)+1
    }   
    traverse(root)
    return maxDiameter

};
// @lc code=end

