/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * 使用两个指针，一个指针慢一个指针快
 * 快指针向前走，如果快指针不等于慢指针，则慢指针的下一个等于快指针，慢指针向前走一步，快指针继续向前走
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let slow=0
    for(let i=1;i<nums.length;i++){
        if(nums[i]!==nums[slow]){
            let temp=nums[i]
            nums[i]=nums[slow+1]
            nums[slow+1]=temp
            slow++
        }
    }
    return slow+1
};
// @lc code=end

