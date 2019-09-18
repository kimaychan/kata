function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var preorderTraversal = function(root) {
  var order = []
  var traverse = function(root, order) {
    if (root != null) {
      order.push(root.val)
      traverse(root.left, order)
      traverse(root.right, order)
    }
    return order
  }
 return traverse(root, order)
};