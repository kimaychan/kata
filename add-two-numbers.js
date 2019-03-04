/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}
  
var addTwoNumbers = function(l1, l2) {
  var carry = 0,
    result = new ListNode(0),
    currentResultNode = result,
    currentL1Node = l1,
    currentL2Node = l2
  
  while (currentL1Node != null || currentL2Node != null) {
    var n1 = ((currentL1Node || {}).val || 0),
      n2 = ((currentL2Node || {}).val || 0),
      sum = n1 + n2 + carry
    carry = Math.floor(sum / 10)
    currentResultNode.next = new ListNode(sum % 10)
    currentResultNode = currentResultNode.next
    currentL1Node = currentL1Node != null ? currentL1Node.next : null
    currentL2Node = currentL2Node != null ? currentL2Node.next : null
  }
  
  if (carry > 0)  currentResultNode.next = new ListNode(carry)
  return result.next
};