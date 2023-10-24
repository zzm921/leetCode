/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let tracks=[]
    let result=[]
    candidates=candidates.sort((a,b)=>{return a-b})
    let backtrack=function(candidates,tracks,target,index){
        if(target===0){
            result.push([...tracks])
        }
        let cenUsed=[]
        for(let i=index;i<candidates.length;i++){
            if(candidates[i]>target||cenUsed.includes(candidates[i])) continue
            cenUsed.push(candidates[i])
            tracks.push(candidates[i])
            backtrack(candidates,tracks,target-candidates[i],i+1)
            tracks.pop()
        }
    }
    backtrack(candidates,tracks,target,0)
    return result
};
// @lc code=end

