/**
给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

注意：

答案中不可以包含重复的四元组。

示例：

给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

满足要求的四元组集合为：
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
 */


/**
* @param {number[]} nums
* @param {number} target
* @return {number[][]}
*/
var fourSum = function (nums, target) {
    nums = nums.sort((val1, val2) => {
        return val1 - val2
    })
    let result = []
    if (nums.length < 4) return []
    for (let j = 0; j < nums.length; j++) {
        if (j > 0 && nums[j] === nums[j - 1]) {
            continue
        }
        for (let i = j + 1; i < nums.length; i++) {
            let towSum = target - nums[i] - nums[j]
            let left = i + 1
            let right = nums.length - 1
            if (i - j > 1 && nums[i] === nums[i - 1]) {
                continue
            }
            while (left < right) {
                if (left === i) {
                    left++
                } else if (right === i) {
                    right--
                } else {
                    let realsum = nums[left] + nums[right]
                    if (realsum === towSum) {
                        result.push([nums[j], nums[i], nums[left], nums[right]])
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
    }
    return result
};

console.log(fourSum([-1, -5, -5, -3, 2, 5, 0, 4],
    - 7))