/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
   //用于存储小于部分数据
    let dummyPre=new ListNode(-1)  
     //用于存储大于部分数据 
    let dummyLast=new ListNode(-1)
    let pre=dummyPre
    let last=dummyLast
    let p =head
    while (p) {
        if (p.val < x) {
            pre.next=p
            pre=pre.next
        } else {
            last.next=p
            last=last.next
        }
        //注意，如果需要将节点添加到另一个节点，需要将节点进行拆分
        let temp=p.next
        p.next=null
        p=temp
    }
    pre.next=dummyLast.next
    return dummyPre.next
};
// @lc code=end

