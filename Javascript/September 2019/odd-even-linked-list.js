/**
 * Given a singly linked list, group all odd nodes together followed by the even nodes. 
 * Please note here we are talking about the node number and not the value in the nodes.
 */

var oddEvenList = function(head) {
  if (head == null) return head
  let res = head,
    odd = head,
    even = head.next,
    connectNode = head.next
  
  while (odd != null && even != null) {
    let t = even.next
    if (t == null) break
    odd.next = even.next
    odd = odd.next
    
    even.next = odd.next
    even = even.next
  }
  
  odd.next = connectNode
  return res
};

/**
 * Runtime: 56 ms, faster than 96.97% of JavaScript online submissions for Odd Even Linked List.
 * Memory Usage: 36.1 MB, less than 100.00% of JavaScript online submissions for Odd Even Linked List.
 */

// 09-24-19