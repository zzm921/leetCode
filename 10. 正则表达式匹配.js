/**
 * 给定一个字符串 (s) 和一个字符模式 (p)。实现支持 '.' 和 '*' 的正则表达式匹配。

'.' 匹配任意单个字符。
'*' 匹配零个或多个前面的元素。
匹配应该覆盖整个字符串 (s) ，而不是部分字符串。

说明:

s 可能为空，且只包含从 a-z 的小写字母。
p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
示例 1:

输入:
s = "aa"
p = "a"
输出: false
解释: "a" 无法匹配 "aa" 整个字符串。
示例 2:

输入:
s = "aa"
p = "a*"
输出: true
解释: '*' 代表可匹配零个或多个前面的元素, 即可以匹配 'a' 。因此, 重复 'a' 一次, 字符串可变为 "aa"。
示例 3:

输入:
s = "ab"
p = ".*"
输出: true
解释: ".*" 表示可匹配零个或多个('*')任意字符('.')。
示例 4:

输入:
s = "aab"
p = "c*a*b"
输出: true
解释: 'c' 可以不被重复, 'a' 可以被重复一次。因此可以匹配字符串 "aab"。
示例 5:

输入:
s = "mississippi"
p = "mis*is*p*."
输出: false
 */



let getPreEquelNum = (s, index) => {
    let curr = s[index]
    let pre = s[index - 1]
    let num = 1
    if (index - 1 < 0) {
        return 0
    }
    if (curr === pre) {
        num += getPreEquelNum(s, index - 1)
    } else {
        num = 0
    }
    return num

}


/**
* @param {string} s
* @param {string} p
* @return {boolean}
*/
var isMatch = function (s, p) {
   if(p===""){
       return s===""
   } 

   //查看第一个是否匹配得上
   let flag=s!==""&&( p[0]===s[0]||p[0]==='.')
   //当后面的为*时，可能有0  无数
   if(p.length>=2&&p[1]==='*'){
        return isMatch(s,p.substring(2))||(flag&&isMatch(s.substring(1),p))
   }else{
       return flag&&isMatch(s.substring(1),p.substring(1))
   }
};



/**
* @param {string} s
* @param {string} p
* @return {boolean}
*/
var isMatch2 = function (s, p) {
    let dp=Array.from({ length: s.length+2 }, () => Array.from({length:p.length+2},()=>false))
    dp[0][0]=true
    dp[1][1]=(s[0]===p[0])||(p[0]==='.')
    //a*时 空字符串也可以匹配
    for(let j=2;j<p.length+1;j++){
        dp[0][j]=dp[0][j-2]&&p[j-1]==='*'
    }
    for(let i=1;i<s.length+1;i++){
        for(let j=2;j<p.length+1;j++){
           if(p[j-1]==='*'){
                dp[i][j]=(dp[i][j-2])||(dp[i-1][j]&&(s[i-1]===p[j-2]||p[j-2]==='.'))
           }else{
               dp[i][j]=dp[i-1][j-1]&&(s[i-1]===p[j-1]||p[j-1]==='.')
           }
        }
    }
    console.log(JSON.stringify(dp))
    return dp[s.length][p.length]
}



console.log(isMatch2("aaa",
"ab*a*c*a"))
