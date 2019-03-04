var mergeTwoLists = function(l1, l2) {
  var result = new ListNode(0),
      tempResultNode = result,
      currentL1 = l1,
      currentL2 = l2
  
  while(currentL1 != null || currentL2 != null) {
      if((currentL1 || {}).val <= (currentL2 || {}).val || currentL1 && !currentL2) {
          tempResultNode.next = new ListNode(currentL1.val)
          currentL1 = currentL1.next
      } else {
          tempResultNode.next = new ListNode(currentL2.val)
          currentL2 = currentL2.next
      }
      tempResultNode = tempResultNode.next
  }
  
  return result.next
};