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
 * 迭代方法
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function(head) {
//     let dummp=new ListNode(-1)
//     while(head!==null){
//         //取出head节点
//         let temp=head.next
//         head.next=null
        
//         //将head节点插入到dummp后面
//         let temp2=dummp.next
//         dummp.next=head
//         dummp.next.next=temp2
//         //重置head节点
//         head=temp
//     }
//     return dummp.next
// };

/**
 * 递归方法 递归将链表的头部和剩余的节点调换位置
 * 如 1 2 3 4 5 
 * 分解成 1 和 (2 3 4 5 )调换位置
 * （2 3 4 5 ）又能分解成 2 和 （3 4 5）调换位置
 * 链表两个位置调换位置  p.next.next=p p.next=null
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if(head===null||head.next===null) return head

    let last=reverseList(head.next)
    head.next.next=head
     head.next=null
    return last
};

// @lc code=end

