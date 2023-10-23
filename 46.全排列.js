/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result=[]
    //记录已经选择过的数字
    let tracks=[]
    //记录nums数字是否被选择的状态
    let used=new Array(nums.length).fill(false)
    let backtrack=function(nums,tracks,used){
        //如果选择的数量跟nums的数量一致，则说明是一条完整的路径,加入结果中。
        if(tracks.length===nums.length){
            result.push([...tracks])
        }
        for(let i=0;i<nums.length;i++){
            //判断是否已经被选择
            if(used[i]===true) continue
            //将数字加入选择列表
            tracks.push(nums[i])
            used[i]=true
            backtrack(nums,tracks,used)
            
            tracks.pop()
            used[i]=false
        }
    }
    backtrack(nums,tracks,used)
    return result
};
// @lc code=end

