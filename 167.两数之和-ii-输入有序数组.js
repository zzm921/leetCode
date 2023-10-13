/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * 有序数组，两两相加等于目标数，可已从第一个和最后一个数组开始相加
 * 如果相加小于目标数字，则left向前，如果大于目标数字，则right先后移动
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let right=numbers.length-1
    let left=0
    while(left<right){
        if(numbers[left]+numbers[right]===target){
           break
        }else if(numbers[left]+numbers[right]>target){
            right--
        }else{
            left++
        }
    }
    return [left+1,right+1]
};
// @lc code=end

