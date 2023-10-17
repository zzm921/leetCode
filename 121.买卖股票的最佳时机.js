/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * 动态规划，低i天买进，低j天卖出 分解成 j天的值-i天的值+dp[i][j-1]  与 j天-i天差值 取大值
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let dp=new Array(prices.length+1).fill(0)
    let max=0
    for(let j=2;j<dp.length;j++){
        let p1=(prices[j-1]-prices[j-2])+dp[j-1]
        let p2=prices[j-1]-prices[j-2]>0?prices[j-1]-prices[j-2]:0
        dp[j]=Math.max(p1,p2)
        max=Math.max(dp[j],max)
    }
    return max
};
// @lc code=end

