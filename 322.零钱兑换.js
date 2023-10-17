/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start

/**
 * memo是备忘录，用于记录已经计算过的值
 * @param {*} coins 
 * @param {*} amount 
 */
// let dp=function(coins,amount,memo){
//     if(amount===0){
//         return 0
//     }
//     //表示没有结果
//     if(amount<0){
//         return -1
//     }
//     if(memo[amount]!==undefined) return memo[amount]
//     let res=Infinity
//     for(let coin of coins){
//        let subNum= dp(coins,amount-coin,memo)
//        if(subNum===-1){
//           continue
//        }
//        res=Math.min(subNum+1,res)
//     }
//     memo[amount]=res
//     return res
// }
// /**
//  * 递归
//  * @param {number[]} coins
//  * @param {number} amount
//  * @return {number}
//  */
// var coinChange = function(coins, amount) {
//     let min=dp(coins, amount,[])
//     return min===Infinity?-1:min
// };


/**
 * 动态规划
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    //dp用于记录合成需要的最小的硬币数
    //创造一个amount+1的数组，记录0-amount总数对应的硬币数。由于最大的硬币数只有可能是amout，定义边界为amount+1
    let dp=new Array(amount+1).fill(amount+1)
    dp[0]=0
    for(let i=1;i<dp.length;i++){
        for(let coin of coins){
            //i表示所需硬币总值，如果coin>i则表示无结果
            if(i<coin) continue
            //如果大于则可以由 i-coin所需的硬币数+1或者i自身所需的值
            dp[i]=Math.min(dp[i-coin]+1,dp[i])
        }
    }
    return dp[amount]===amount+1?-1:dp[amount]
};
// @lc code=end

