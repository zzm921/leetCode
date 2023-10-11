/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummp=new ListNode(-1)
    dummp.next=head
    let p=dummp
    while(p!==null&&p.next!==null){
        if(p.next.val===val){
            p.next=p.next.next
        }else{
            p=p.next
        }
    }
    return dummp.next
};
// @lc code=end

