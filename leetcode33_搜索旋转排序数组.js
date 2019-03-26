/**
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

你可以假设数组中不存在重复的元素。

你的算法时间复杂度必须是 O(log n) 级别。

示例 1:

输入: nums = [4,5,6,7,0,1,2], target = 0
输出: 4
示例 2:

输入: nums = [4,5,6,7,0,1,2], target = 3
输出: -1
 */

/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var search = function (nums, target) {
    let index = -1
    if (nums.length <= 2) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === target) {
                index = i
            }
        }
        return index
    }
    let left = 0
    let right = nums.length - 1

    while (right - left > 1) {
        let mid = parseInt((right + left) / 2)
        if (nums[mid] === target) {
            index = mid
            break
        } else if (nums[left] === target) {
            index = left
            break
        } else if (nums[right] === target) {
            index = right
            break
        } else {
            if (nums[mid] > nums[left]) {
                if (nums[left] < target && nums[mid] > target) {
                    right = mid
                    continue
                } else {
                    left = mid
                }
            } else {
                if (nums[right] > target && nums[mid] < target) {
                    left = mid
                } else {
                    right = mid
                }
            }
        }
    }
    return index
};

console.log(search([1, 3, 5],
    2))