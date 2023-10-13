/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if(s.length===0) return s
    let left=0
    let right=s.length-1
    while(right-left>=1){
        let temp=s[left]
        s[left]=s[right]
        s[right]=temp
        left++
        right--
    }
    return s
};
// @lc code=end

