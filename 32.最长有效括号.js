/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * 从头开始遍历s。用dp记录在1-i字符串对应的最长有效括号长度
 * 如果s[i]为)时，有可能 包含最长字符串 
 * dp用于记录当前值的最长括号字符串，
 * 由于需要获取i+1/i+2，所以i需要从s.length开始 j需要获取j-1 所以j从1开始 
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let max=0
    let dp=new Array(s.length+1).fill(0)
    for(let i=2;i<dp.length;i++){
        if(s[i-1]===")"){
            if(s[i-2]==="("){
                dp[i]=2+dp[i-2]
            }else if (dp[i-1]>0&&s[i-dp[i-1]-2]==='('){
                dp[i]=dp[i-1]+2+dp[i-dp[i-1]-2]
            }
            if(dp[i]>0){
                max=Math.max(dp[i],max)
            }
        }
    }
    return max
};
// @lc code=end

