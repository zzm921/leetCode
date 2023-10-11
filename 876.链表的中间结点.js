/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    //使用两个指针，每次快指针走两步，慢指针就走一步，当快指针走到头的时候，慢指针刚好为中间节点
    let slow=head
    let fast=head
    //记录是双数还是多数
    while(fast!==null&&fast.next!==null){
        fast=fast.next.next
        slow=slow.next
    }
    return slow
    
};
// @lc code=end

