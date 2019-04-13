/** 
 * Given a linked list, swap every two adjacent nodes and return its head.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if ((head || {}).next == null) return head
    var result = new ListNode(0),
			tempResultNode = result, 
			currentNode = head,
			isAdjustcent = true
    while (currentNode.next != null) {
			tempResultNode.next = new ListNode(currentNode.next.val)
			if (isAdjustcent) {        
				tempResultNode = tempResultNode.next
				tempResultNode.next = new ListNode(currentNode.val)
				tempResultNode = tempResultNode.next
			} 
			currentNode = currentNode.next
			isAdjustcent = !isAdjustcent
    }
    return result.next
};

/* Runtime: 56 ms, faster than 91.30% of JavaScript online submissions for Swap Nodes in Pairs.
Memory Usage: 33.6 MB, less than 96.09% of JavaScript online submissions for Swap Nodes in Pairs.*/

//03-20-2019