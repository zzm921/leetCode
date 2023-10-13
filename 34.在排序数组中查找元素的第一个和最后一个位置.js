/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start

/**
 * 最左边界
 * @param {*} nums 
 * @param {*} target 
 */
let left_bound=function(nums,target){
    let left=0
    let right=nums.length-1
    while (left<=right) {
        let mid=Math.floor((left+right)/2)
        if(nums[mid]===target){
            right=mid-1
        }else if (nums[mid]<target){
            left=mid+1
        }else if (nums[mid]>target){
            right=mid-1
        }
    }
    if(left>nums.length-1||nums[left]!==target){
        return -1
    }
    return left
}

let right_bound=function(nums,target){
    let left=0
    let right=nums.length-1
    while (left<=right) {
        let mid=Math.floor((left+right)/2)
        if(nums[mid]===target){
            left=mid+1
        }else if (nums[mid]<target){
            left=mid+1
        }else if (nums[mid]>target){
            right=mid-1
        }
    }
    if(right<0||nums[right]!==target){
        return -1
    }
    return right
}


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    return [left_bound(nums,target),right_bound(nums,target)]
};
// @lc code=end

