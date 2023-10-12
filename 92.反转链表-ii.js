/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * 反转前n个节点
 * @param {*} head 
 * @param {*} n 
 */
 let reverseN=function(head,n){
     if(n===1){
         return head
     }
     let last =reverseN(head.next,n-1)
     let temp=last.next
     //取需要循环链表外的节点，递归了n次，则需要往前走n-1步，得到循环外的节点
     for(let i=1;i<n-1;i++){
         temp=temp.next
     }
     head.next.next=head
     head.next=temp
     return last     
 }

/**
 * 采用递归的方法反转链表
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(head===null) return head
    let n =right-left
    //前进left-1步
    let dummp=new ListNode(-1)
    dummp.next=head
    let p=dummp
    for(let i=1;i<left;i++){
        p=p.next
    }
    let last=reverseN(p.next,n+1)
    p.next=last
    return dummp.next

};
// @lc code=end

