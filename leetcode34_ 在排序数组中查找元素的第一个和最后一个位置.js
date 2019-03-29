/**
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

你的算法时间复杂度必须是 O(log n) 级别。

如果数组中不存在目标值，返回 [-1, -1]。

示例 1:

输入: nums = [5,7,7,8,8,10], target = 8
输出: [3,4]
示例 2:

输入: nums = [5,7,7,8,8,10], target = 6
输出: [-1,-1]
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let index1 = -1
let index2 = -1
if (nums.length <= 2) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            if(index1===-1){
                index1=i
                index2=i
            }else{
                index2=i
            }
        }
    }
    return [index1,index2]
}
let left = 0
let right = nums.length - 1
while (right - left > 1) {
    let mid = parseInt((right + left) / 2)
    let flag=false
    if(nums[mid]===target){
        index1=mid
        index2=mid
        flag=true
    }else if (nums[left]===target){
        index1=left
        index2=left
        flag=true
    }else if(nums[right]===target){
        index2=right
        index1=right
        flag=true
    }else if(nums[right]>target&&nums[left]<target){
        if(nums[mid]>target){
            right=mid
        }else{
            left=mid
        }
    }else{
        return [-1,-1]
    }
    if(flag){
        while(true){
            if(nums[index1-1]!==undefined&&nums[index1-1]===target){
                index1--
            }else{
                break
            }
        }
        while(true){
            if(nums[index2+1]!==undefined&&nums[index2+1]===target){
                index2++
            }else{
                break
            }
        }
        break
    }
}
console.log(index1,index2)
return [index1,index2]
};

searchRange([0,0,0,1,2,3]
    ,0)