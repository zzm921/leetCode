/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */

/**
 * 找到倒数第n个节点
 */

let findNthFromEnd=function(head, n){
    let p1=head
    let p2=head
    for(let i=0;i<n;i++){
       p1=p1.next
    }
    while(p1){
        p1=p1.next
        p2=p2.next
    }
    return p2
}

var removeNthFromEnd = function(head, n) {
    //增加一个虚拟节点，防止删除倒数第n个为第一个情况    
    let dummp=new ListNode(-1)
    dummp.next=head
    let p2 =findNthFromEnd(dummp, n+1)
    p2.next=p2.next.next
    return dummp.next

};
// @lc code=end

