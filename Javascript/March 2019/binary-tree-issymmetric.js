var isSymmetric = function(root) {
  if (root == null) return true
  const traverse = (l, r) => {
    if (l == undefined && r == undefined)
      return true
    else if (l == undefined || r == undefined)
      return false
    else if (l.val === r.val)
      return traverse(l.left, r.right) && traverse(l.right, r.left)
    else
      return false
  }
return traverse(root.left, root.right)
};