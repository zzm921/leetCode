/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0
    let depth=1
    //q用于记录当前层访问的节点
    let q=[root]
    while(q.length>0){
        let size=q.length
        for(let i=0;i<size;i++){
            //去除一个节点，如果left和right都为空，则表示已经到了最终节点，返回深度
            let cur=q.shift()
            if(cur.left==null&&cur.right==null){
                return depth
            }
            //如果叶子节点存在，则将叶子几点加入到q中，继续计算
            if(cur.left) q.push(cur.left)
            if(cur.right) q.push(cur.right)
        }
        depth++
    }

};
// @lc code=end

