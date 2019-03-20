/**
合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

示例:

输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6

解：
两两合并
递归
最后一条则是所需
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
 * @param {ListNode[]} lists
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
var mergeKLists = function (lists) {
  if (lists.length === 0) return null
  if (lists.length === 1) return lists[0]
  let curList = []
  for (let i = 0; i < lists.length; i++) {
    if (lists[i + 1]) {
      curList.push(mergeTwoLists(lists[i], lists[i + 1]))
      ++i
    } else {
      curList.push(lists[i])
      ++i
    }
  }
  return mergeKLists(curList)
};

let a = new ListNode(1)
let b = new ListNode(2)
let c = new ListNode(3)
let d = new ListNode(4)
a.next = b
c.next = d

mergeKLists([a, c, b])