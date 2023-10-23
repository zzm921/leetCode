/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result=[]
    let tracks=[]
    let used=new Array(nums.length).fill(false)
    /**
     * index表示子集下标，
     */
    let backtrack=function(nums,tracks,used,index){
        result.push([...tracks])
        for(let i=index;i<nums.length;i++){
            if(used[i]) continue
            tracks.push(nums[i])
            used[i]=true
            backtrack(nums,tracks,used,i+1)
            tracks.pop()
            used[i]=false
        }
    }
    backtrack(nums,tracks,used,0)
    return result
};
// @lc code=end

