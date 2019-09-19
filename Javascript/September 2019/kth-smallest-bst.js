/**
 * 
 * Given a binary search tree, write a function kthSmallest to find the kth smallest element 
 * in it.
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let traverse = (node, order) => {
    if (node)  {
      traverse(node.left, order)
      order.push(node.val)
      traverse(node.right, order)
    }
    return order
  }
  return traverse(root, [])[k-1]
};

//09-19-2019