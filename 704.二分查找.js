/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left=0
    let right=nums.length-1
    let index=-1
    while(left<=right){
        mid=Math.floor((right+left)/2) 
        if(nums[mid]===target){
            index=mid
            break
        }else if (nums[mid]>target){
            right=mid-1
        }else if(nums[mid]<target){
            left=mid+1
        }
    }
    return index
};
// @lc code=end

