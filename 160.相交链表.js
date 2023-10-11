/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 假设链表为A,B
 * 无法知道个链表何时相交，两个链表相交，则两个链表最后n个节点相等
 * 所以，将两个链表合并。无论是A->B 排列还是 B->A排练，最后的n个节点都是相等的。
 * 利用两个指针遍历A->B和B->A 当节点相等时。则表示相交
 * 
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let p1=headA
    let p2=headB
    while(p1!==p2){
        if(p1===null){
            p1=headB
        }else{
            p1=p1.next
        }
        if(p2===null){
            p2=headA
        }else{
            p2=p2.next
        }
    }
    return p1
    
};
// @lc code=end

