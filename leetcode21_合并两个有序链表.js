/**
将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2
    if (!l2) return l1
    let head, pre
    if (l1.val < l2.val) {
        head = l1
        pre = head
        l1 = l1.next
    } else {
        head = l2
        pre = head
        l2 = l2.next
    }
    while (l1 && l2) {
        if (l1.val < l2.val) {
            pre.next = l1
            pre = pre.next
            l1 = l1.next
        } else {
            pre.next = l2
            pre = pre.next
            l2 = l2.next
        }
    }
    pre.next = l1 ? l1 : l2
    return head
};

let a = new ListNode(1)
let b = new ListNode(2)
let c = new ListNode(3)
let d = new ListNode(4)
a.next = b
c.next = d

console.log(mergeTwoLists(a, c))