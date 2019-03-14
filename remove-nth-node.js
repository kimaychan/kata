/**
 * Task:
 * Given a linked list, remove the n-th node from the end of list and return its head.
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
	var currentNode = head,
		length = 0
	while(currentNode != null) { 
		length+=1 
		currentNode = currentNode.next
	}
	currentNode = head
	var ctr = 0, 
		result = new ListNode(0),
		tempResultNode = result
	while (currentNode != null && ctr < length-n) {
		ctr+=1
		tempResultNode.next = currentNode
		tempResultNode = tempResultNode.next
		currentNode = currentNode.next
	}
	tempResultNode.next = (currentNode || {}).next
	return result.next
};

//03-14-2019