/**
实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

必须原地修改，只允许使用额外常数空间。

以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
 */

 /**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let tancepoint
    for(let i=nums.length-1;i>0;i--){
        if(nums[i]>nums[i-1]){
            tancepoint= i-1
            break
        }
    }
    if(tancepoint!==undefined){
        for(let i=nums.length-1;i>tancepoint;i--){
            if(nums[i]>nums[tancepoint]){
                let tmp=nums[i]
                nums[i]=nums[tancepoint]
                nums[tancepoint]=tmp
                break
            }
          
        }
    }
    let left=tancepoint===undefined?0:tancepoint+1
    let right=nums.length-1
    while(left<right){
        let tmp=nums[left]
        nums[left]=nums[right]
        nums[right]=tmp
        left++
        right--
    }
    console.log(nums)
    return nums
};

nextPermutation([1,3,2])
nextPermutation([1,5,1])
