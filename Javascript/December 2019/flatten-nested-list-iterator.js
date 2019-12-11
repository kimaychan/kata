/**
 * Given a nested list of integers, implement an iterator to flatten it.
 * Each element is either an integer, or a list -- whose elements may also be integers or other lists.
 *
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

var NestedIterator = function(nestedList) {
  const flatten = (nl, list) => {
    if (nl.length > 0) {
      if (nl[0].isInteger()) {
        list.push(nl.shift().getInteger())
        flatten(nl, list)
      } else {
        flatten(nl.shift().getList(), list)
        flatten(nl, list)
      }
    }
    return list
  }
  
  this.list = flatten(nestedList, [])
};


/**
* @this NestedIterator
* @returns {boolean}
*/
NestedIterator.prototype.hasNext = function() {
  return this.list.length > 0
};

/**
* @this NestedIterator
* @returns {integer}
*/
NestedIterator.prototype.next = function() {
  return this.list.shift()
};

/**
* Your NestedIterator will be called like this:
* var i = new NestedIterator(nestedList), a = [];
* while (i.hasNext()) a.push(i.next());
*/

// 12-11-19