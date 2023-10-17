/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * 普通算法
 * @param {number} n
 * @return {number}
 */
// var fib = function(n) {
//     if(n===0){
//         return 0
//     }
//     if (n===1){
//         return 1
//     }
//     let result =fib(n-1)+fib(n-2)
//     return result 
// };

/**
 * 改进，带备忘录的递归
 * @param {*} n 
 * @returns 
 */
// let dp=function (n,memo){
//     if(n===0){
//         return 0
//     }
//     if (n===1){
//         return 1
//     }
//     if (memo[n] != 0) {
//         return memo[n];
//     }
//     memo[n]=dp(n-1,memo)+dp(n-2,memo)
//     return  memo[n]
// }

// var fib = function(n) {
//     let memo = new Array(n + 1).fill(0);
//     let result =dp(n,memo)
    
//     return result 
// };


/**
 * 改进，dp 数组的迭代（递推）解法
 * @param {*} n 
 * @returns 
 */
var fib = function(n) {
    let dp = new Array(n + 1).fill(0);
    dp[0]=0,dp[1]=1
    for(let i=2;i<n+1;i++){
        dp[i]=dp[i-1]+dp[i-2]
    }
    return dp[n] 
};


// @lc code=end

