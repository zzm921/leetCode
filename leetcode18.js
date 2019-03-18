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

    //求出两两之和
    let twoNumSums = []
    for (let i = 0; i < nums.length; i++) {
        let right = nums.length - 1
        let arr = new Array(i + 1).fill(0)
        while (i < right) {
            arr[right] = nums[i] + nums[right]
            right--
        }
        twoNumSums.push(arr)
    }
    for (let i = 0; i < twoNumSums.length; i++) {
        for (let j = i; j < twoNumSums.length; j++) {
            let left = i, right = twoNumSums.length - 1
            while (left < right) {
                if (twoNumSums[left])
                    right--
            }
            twoNumSums.push(arr)
        }
    }

};

fourSum([1, 0, -1, 0, -2, 2])