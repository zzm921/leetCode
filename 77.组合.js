/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result=[]
    let used=new Array(n+1).fill(false)
    let tracks=[]
    let backtrack=function(start){
        if(tracks.length===k){
            result.push([...tracks])
            return
        }
        for(let i=start;i<=n;i++){
            if(used[i]) continue
            tracks.push(i)
            used[i]=true
            backtrack(i+1)
            tracks.pop()
            used[i]=false
        }
    }
    backtrack(1)
    return result
};
combine(4,2)
// @lc code=end

