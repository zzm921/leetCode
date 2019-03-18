/**
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 */

/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var threeSumClosest = function (nums, target) {
    let sum = nums[0] + nums[1] + nums[2]
    nums = nums.sort((val1, val2) => {
        return val1 - val2
    })
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1
        let right = nums.length - 1
        let presum = nums[left] + nums[right] + nums[i]
        let closestSum = nums[left] + nums[right] + nums[i]
        if (presum === target) return presum
        while (left < right) {
            let flag = true
            let n = 1
            let crrsum = nums[left] + nums[right] + nums[i]
            if (crrsum - target === 0) return crrsum
            if ((presum - target) * (crrsum - target) > 0 || ((presum - target) * (crrsum - target) < 0 && n === 1)) {
                if ((presum - target) * (crrsum - target) < 0) {
                    n++
                }
                if (Math.abs(crrsum - target) < Math.abs(closestSum - target)) {
                    closestSum = crrsum
                }
                if (crrsum - target > 0) {
                    right--
                } else {
                    left++
                }
                flag = false

            }
            if (flag || left === right) {
                if (Math.abs(closestSum - target) < Math.abs(sum - target)) {
                    sum = closestSum
                }

                break
            }
            presum = crrsum

        }
    }
    return sum
};

console.log(threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82))


console.log(threeSumClosest([1, 2, 5, 10, 11], 12))

console.log(threeSumClosest([87, 6, -100, -19, 10, -8, -58, 56, 14, -1, -42, -45, -17, 10, 20, -4, 13, -17, 0, 11, -44, 65, 74, -48, 30, -91, 13, -53, 76, -69, -19, -69, 16, 78, -56, 27, 41, 67, -79, -2, 30, -13, -60, 39, 95, 64, -12, 45, -52, 45, -44, 73, 97, 100, -19, -16, -26, 58, -61, 53, 70, 1, -83, 11, -35, -7, 61, 30, 17, 98, 29, 52, 75, -73, -73, -23, -75, 91, 3, -57, 91, 50, 42, 74, -7, 62, 17, -91, 55, 94, -21, -36, 73, 19, -61, -82, 73, 1, -10, -40, 11, 54, -81, 20, 40, -29, 96, 89, 57, 10, -16, -34, -56, 69, 76, 49, 76, 82, 80, 58, -47, 12, 17, 77, -75, -24, 11, -45, 60, 65, 55, -89, 49, -19, 4], -275))

