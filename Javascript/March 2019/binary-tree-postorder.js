var postorderTraversal = function(root) {
  var traverse = function(root, order) {
      if (root != null) {
          traverse(root.left, order)
          traverse(root.right, order)
          order.push(root.val)
      }
      return order
  }
  
  return traverse(root, [])
};