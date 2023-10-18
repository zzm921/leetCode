/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * 递归
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// var isMatch = function(s, p) {
//    if(p==='')  return s===''
//    //判断第一个值是否相等
//    let flag=s!==""&&(p[0]==='.'||p[0]===s[0])
//    if(p.length>=2&&p[1]==='*'){
//      return (flag&&isMatch(s.substring(1),p))||isMatch(s,p.substring(2))
//    }else{
//     return flag&&isMatch(s.substring(1),p.substring(1))
//    }
// };


/**
 * 递归
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
   let dp=Array.from({ length: s.length+1 }, () => Array.from({length:p.length+1},()=>false))
   //初始化
   dp[0][0]=true
   dp[1][1]=p[0]==='.'||p[0]===s[0]
   //如果p的第二个为*时，空字符串也可以匹配
   for(let j=2;j<=p.length;j++){
       dp[0][j]= p[j-1]==='*'&&dp[0][j-2]
   }
   for(let i=1;i<=s.length;i++){
       for(let j=2;j<=p.length;j++){
           //如果p的下一个为*时， 可以是0个和n个 则只需要判断 s当前值=p上一个当前值(n个情况)或者p的下一个等于s当前值(0个情况)
           //判断当前值是否相等
            if(p[j-1]==="*"){
                //如果为0个，则去 j-2和i
                let flag0=dp[i][j-2]
                //如果为n个，则s的当前值等于p的上一个值且，s的上一个值满足正则
                let flagN=dp[i-1][j]&&(p[j-2]==='.'||p[j-2]===s[i-1])
                dp[i][j]= flag0||flagN
            }else{
                // j的下一个不是*  i-1 和j-1 满足且 pj=si则 表示 dp[i][j]满足
                dp[i][j]=dp[i-1][j-1]&&(p[j-1]==='.'||p[j-1]===s[i-1])
            }
       }
   }
   return dp[s.length][p.length]
};


// @lc code=end

