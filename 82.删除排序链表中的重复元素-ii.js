/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function(head) {
    if(head===null||head.next===null) return head
    let dummp=new ListNode(-1)
    let p =dummp
    let slow=head
    let fast=head.next
    //当前对比的值
    let duplicatesFlag=false
    while(fast!==null){
        if(slow.val===fast.val){
            duplicatesFlag=true
            fast=fast.next
        }else{
            if(duplicatesFlag===false){
                let temp=slow.next
                slow.next=null
                p.next=slow
                slow=temp
                p=p.next
            }
            slow=fast
            fast=fast.next
            duplicatesFlag=false
        }
    }
    if(duplicatesFlag===false){
        p.next=slow
    }
    return dummp.next

};
// @lc code=end

