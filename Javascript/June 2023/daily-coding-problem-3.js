/*
  This problem was asked by Google.
  Given the root to a binary tree, implement serialize(root), 
  which serializes the tree into a string, and deserialize(s), 
  which deserializes the string back into the tree.
*/

function Node(val, left, right) {
  this.val = val
  this.left = left
  this.right = right
}

const serialize = (node, serialized) => {
  serialized = serialized || ''
  if (node) {
    let left = serialize(node.left) || 'null'
    let right = serialize(node.right) || 'null'
    return node.val + `.${left}` + `.${right}`
  }
  return serialized
}

const deserialize = (str, currentNode) => {
  const strArr = str ? str.split('.') : []
  let node = currentNode || new Node()

  if (str.length === 0 || strArr[0] === 'null') {
    return
  }
  node.val = strArr[0]
  node.left = deserialize(strArr.slice(1).join('.'))
  node.right = deserialize(strArr.slice(3).join('.'))
  return node
}

// const left = new Node('')

const tree = new Node('1',
  new Node('2', new Node('4'), new Node('5')),
  new Node('3', new Node('6'), new Node('7')))

// console.log(serialize(tree))
console.log(JSON.stringify(deserialize(serialize(tree))))
console.log('====')
console.log(JSON.stringify(tree))
// console.log('=====')
// console.log(tree)


// `

// {"val":"1",
//   "left":{
//     "val":"2",
//     "left":{"val":"4",
//       "left":{},
//       "right":{"val":"5","
//           left":{},
//           "right":{
//             "val":"3",
//             "left":{
//               "val":"6",
//               "left":{},"right":{"val":"7","left":{}}},"right":{}}}},"right":{}},"right":{}}

// {
//   "val":"1",
//   "left":{
//     "val":"2",
//     "left":{"val":"4"},
//     "right":{"val":"5"}
//   },
//   "right": {
//     "val":"3",
//     "left":{"val":"6"},
//     "right":{"val":"7"}
//   }
// }
// `