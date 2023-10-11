/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并 K 个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */


/**
 * 方法1 使用有序队列
 * 1、将每个链表头部节点插入有序队列。
 * 2、提取出最小的头部节点，加入存储结果的链表后。再将提取出来的头部节点最小的链表的下一个节点添加进有序队列
 * 3、循环提取
 */

var mergeKLists = function(lists) {
    if(lists.length===0) return null
    let dummy=new ListNode(-1)
    let p =dummy
    const pq = new PriorityQueue({compare: (a, b) => a.val - b.val})
    for( let head of lists){
        if(head!==null){
            pq.enqueue(head)
        }
    }

    while(!pq.isEmpty()){
        let node =pq.dequeue()
        p.next=node
        if(node.next!==null){
            pq.enqueue(node.next)
        }
        p=p.next
    }
    return dummy.next

};

/**
 * 方法2 分治法
 * n个链表拆分成 n-1个双链表组合
 */
//  var mergeTwoLists = function (l1, l2) {
//     if (!l1) return l2
//     if (!l2) return l1
//     let head, pre
//     if (l1.val < l2.val) {
//       head = l1
//       pre = head
//       l1 = l1.next
//     } else {
//       head = l2
//       pre = head
//       l2 = l2.next
//     }
//     while (l1 && l2) {
//       if (l1.val < l2.val) {
//         pre.next = l1
//         pre = pre.next
//         l1 = l1.next
//       } else {
//         pre.next = l2
//         pre = pre.next
//         l2 = l2.next
//       }
//     }
//     pre.next = l1 ? l1 : l2
//     return head
//   };
//   var mergeKLists = function (lists) {
//     if (lists.length === 0) return null
//     if (lists.length === 1) return lists[0]
//     let curList = []
//     for (let i = 0; i < lists.length; i++) {
//       if (lists[i + 1]) {
//         curList.push(mergeTwoLists(lists[i], lists[i + 1]))
//         ++i
//       } else {
//         curList.push(lists[i])
//         ++i
//       }
//     }
//     return mergeKLists(curList)
//   };
// @lc code=end

