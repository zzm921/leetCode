/**
给出一个链表，每 k 个节点一组进行翻转，并返回翻转后的链表。

k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么将最后剩余节点保持原有顺序。

示例 :

给定这个链表：1->2->3->4->5

当 k = 2 时，应当返回: 2->1->4->3->5

当 k = 3 时，应当返回: 3->2->1->4->5

说明 :

你的算法只能使用常数的额外空间。
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 */


function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (k === 1) return head
    if (!head || !head.next) return head
    let left = head
    let right = head.next
    let i = 1
    while (i < k) {
        let tmp = right
        if (!tmp) {
            head.next = null
            return reverseKGroup(left, i)
        } else {
            right = tmp.next
            tmp.next = left
            left = tmp
            ++i
        }

    }
    head.next = reverseKGroup(right, k)
    return left
};

let a = new ListNode(1)
let b = new ListNode(2)
let c = new ListNode(3)
let d = new ListNode(4)
let e = new ListNode(5)
a.next = b
b.next = c
c.next = d
d.next = e


reverseKGroup(a, 3)