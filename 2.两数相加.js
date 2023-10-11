/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let p1=l1
    let p2=l2
    let dummp=new ListNode(-1)
    let head=dummp
    let nextUp=0
    while(p1!==null||p2!==null){
        let p1Num=0,p2Num=0
        if(p1!==null){
            p1Num=p1.val
            p1=p1.next
        }
        if(p2!==null){
            p2Num=p2.val
            p2=p2.next
        } 
        let sum=p1Num+p2Num+nextUp
        nextUp=parseInt(sum/10)
        let nodeVal=sum%10
        let node=new ListNode(nodeVal)
        head.next=node
        head=node
    }
    if(nextUp!==0){
        head.next=new ListNode(nextUp)
    }
    return dummp.next

};
// @lc code=end

