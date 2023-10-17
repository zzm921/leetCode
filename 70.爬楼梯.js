/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * 步数为2或者2
 * 分解问题为，爬n阶的路径数等于爬n-1阶路径数+n-2阶路径数。
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp=new Array(n+1).fill(0)
    dp[0]=1
    dp[1]=1
    for(let i=2;i<dp.length;i++){
        dp[i]=dp[i-1]+dp[i-2]
    }
    return dp[n]
};
// @lc code=end

