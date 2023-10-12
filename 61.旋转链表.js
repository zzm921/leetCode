/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * 将链表变为一个环，前进k步后断开
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head,k) {
    if(head===null) return head
   let last=head
   let len=1
   while(last.next!==null){
        len++
       last=last.next
   }
   //last为最后一个节点，构建一个环
   last.next=head
   //移动一步后，p1记录尾部节点，p2记录头部节点
   let p1=head
   let p2=head.next
   //对于环来说，向右移动k步，就是向左移动  len- k%len 。p1,p2已经移动了一步
   for(let i=0;i<(len- k%len) -1;i++){
       p1=p1.next
       p2=p2.next
   }
   //断开环
   p1.next=null
   return p2
    
};
// @lc code=end

