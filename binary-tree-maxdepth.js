var maxDepth = function(root) {
  var maxDepth = 0
  function traverse (root, depth) {
    if (root != null) {
      depth += 1
      maxDepth = Math.max(depth, maxDepth)
      traverse(root.left, depth)
      traverse(root.right, depth)
    }
    return maxDepth
  }
  return traverse(root, 0)
};