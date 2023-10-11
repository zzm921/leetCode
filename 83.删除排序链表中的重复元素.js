/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 采用快慢两个指针，快指针先走，如果快指针的值等于慢指针的值，删除当前节点，将慢指针等于下一个节点，快指针等于下一个节点
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head===null) return head
    let dummp=head
    let slow=dummp
    let fast=dummp.next
    while(fast!==null){
        if(slow.val===fast.val){
            fast=fast.next
            slow.next=fast
        }else{
            slow=fast
            fast=fast.next
        }
    }
    return dummp
    

};
// @lc code=end

