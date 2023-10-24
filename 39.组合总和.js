/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let tracks=[]
    let result=[]
    let backtrack=function(candidates,tracks,target,index){
        
        if(target===0){
            result.push([...tracks])
            return
        }
        for(let i=index;i<candidates.length;i++){
            if(candidates[i]>target) continue
            tracks.push(candidates[i])
            backtrack(candidates,tracks,target-candidates[i],i)
            tracks.pop()
        }
    }
    backtrack(candidates,tracks,target,0)
    return result
};
// @lc code=end

