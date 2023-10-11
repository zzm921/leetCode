/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function(head) {
    let dummp=new ListNode(-1)
    while(head!==null){
        //取出head节点
        let temp=head.next
        head.next=null
        
        //将head节点插入到dummp后面
        let temp2=dummp.next
        dummp.next=head
        dummp.next.next=temp2
        //重置head节点
        head=temp
    }
    return dummp.next
};
// @lc code=end

