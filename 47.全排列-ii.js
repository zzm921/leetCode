/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let tracks=[]
    let used=new Array(nums.length).fill(false)
    let result=[]
    let backtrack=(nums,tracks,used)=>{
        if(tracks.length===nums.length){
            result.push([...tracks])
        }
        let cenUsed=[]
        for(let i=0;i<nums.length;i++){
            if(used[i]||cenUsed.includes(nums[i])) continue
            cenUsed.push(nums[i])
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

