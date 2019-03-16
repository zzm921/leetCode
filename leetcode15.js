/**
给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 */

/**
* @param {number[]} nums
* @return {number[][]}
*/
var threeSum = function (nums) {
    let result = []
    nums = nums.sort()
    for (let i = 0; i < nums.length; i++) {
        let towSum = 0 - nums[i]
        let left = 0
        let right = nums.length - 1
        while (left !== right) {
            if (left === i) {
                left++
            } else if (right === i) {
                right--
            } else {
                let realsum = nums[left] + nums[right]
                if (realsum === towSum) {
                    result.push([nums[i], nums[left], nums[right]])
                    left++
                    right--
                    while (left !== right && (nums[left - 1] === nums[left] || nums[right] === nums[right + 1])) {
                        if (nums[left - 1] === nums[left]) {
                            left++
                        }
                        if (nums[right] === nums[right + 1]) {
                            right--
                        }
                    }
                } else if (realsum > towSum) {
                    right--
                } else {
                    left++
                }
            }
        }
    }
};