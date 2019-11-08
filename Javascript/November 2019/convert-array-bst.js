/**
 * Given an array where elements are sorted in ascending order, 
 * convert it to a height balanced BST.
 * 
 * For this problem, a height-balanced binary tree is defined as a binary tree in which 
 * the depth of the two subtrees of every node never differ by more than 1.
 * 
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  var root = null
  if (nums.length > 0) {
    var rootIndex = Math.floor(nums.length/2)
    root = new TreeNode(nums[rootIndex])
    root.right = sortedArrayToBST(nums.slice(rootIndex+1, nums.length))
    root.left = sortedArrayToBST(nums.slice(0, rootIndex))
  }
  return root
};

//11-08-19