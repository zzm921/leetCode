/**
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

示例:

给定 1->2->3->4, 你应该返回 2->1->4->3.
 */

/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let h = new ListNode(0)
    if (!head) return null
    h.next = head
    let i = 0
    let pre = h
    let cur = h.next
    while (cur) {
        if (!cur.next) {
            break
        }
        let tmp = cur.next.next
        pre.next = cur.next
        pre.next.next = cur
        cur.next = tmp
        pre = cur
        cur = tmp
    }
    return h.next
};


/**
 * 递归
 * 前面两个交换  后面相当于同一类问题  递归交换
 * @param {*} head 
 */
var swapPairs2 = function (head) {
    if (!head || !head.next) return head
    let left = head.next
    let right = swapPairs(left.next)
    left.next = head
    left.next.next = right
    return left

};