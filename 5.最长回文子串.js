/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    //创建一个二维dp数组，记录s的i-j的回文子串长度，如果不是回文子串则置为-1
    let longest=''
    let dp=new Array(s.length+1).fill(0).map(() => new Array(s.length+1).fill(-1))
    //由于需要获取 dp[i+1][j-1] 所以需要i需要从大到小，j需要从小到大，不然获取到的值为初始值
    for(let i=dp.length-1;i>=1;i--){
        for(let j=i;j<dp.length;j++){
            //如何判断i--j是回文子串，只需要判断i+1->j-1为回文子串且s[i]=s[j]
            if(i===j){
                dp[i][j]=1
            } else if(j-i===1) {
                if(s[i-1]===s[j-1]){
                    dp[i][j]=1
                }
            }else{
                if(s[i-1]===s[j-1]&&dp[i+1][j-1]===1){
                    dp[i][j]=1
                }
            } 
            if(dp[i][j]===1){
                if(longest.length<j-i+1){
                    longest=s.substring(i-1,j)
                }
            }
        }
    }
    return longest
};
console.log(longestPalindrome('ccc')) 
// @lc code=end

