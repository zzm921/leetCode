/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let result=[]
    let tracks=[]
    //记录所有的数字是否被使用
    nums=nums.sort((a,b)=>{return a-b})
    let used=new Array(nums.length).fill(false)
    /**
     * index表示子集下标，
     */
    let backtrack=function(nums,tracks,used,index){
        result.push([...tracks])
         //记录每一层的数字是否被使用，由于有重复数字，则每个backtrack下，一个数字只能用一次.
        let cenUsed=[]
        for(let i=index;i<nums.length;i++){
            if(used[i]||cenUsed.includes(nums[i])) continue
            cenUsed.push(nums[i])
            tracks.push(nums[i])
            used[i]=true
            backtrack(nums,tracks,used,i+1)
            tracks.pop()
            used[i]=false
            //当前循环下使用过该数字则记录下来
           
        }
    }
    backtrack(nums,tracks,used,0)
    return result

};
// @lc code=end

