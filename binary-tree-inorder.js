var inorderTraversal = function(root) {
  var traverse = function(root, order) {
      if (root != null) {
          traverse(root.left, order)
          order.push(root.val)
          traverse(root.right, order)
      }
      return order
  }
  return traverse(root, [])
};