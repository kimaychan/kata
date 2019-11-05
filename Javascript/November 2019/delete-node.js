/**
 * Write a function to delete a node (except the tail) in a singly linked list, 
 * given only access to that node.
 * 
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

var deleteNode = function(node) {
  node.val = node.next.val
  node.next = node.next.next
};

//11-05-19