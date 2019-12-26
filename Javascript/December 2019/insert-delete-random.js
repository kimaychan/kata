/**
 * 
 * Design a data structure that supports all following operations in average O(1) time.
 * 
 *    insert(val): Inserts an item val to the set if not already present.
 *    remove(val): Removes an item val from the set if present.
 *    getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.
 
 */

const swap = function (arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
var RandomizedSet = function() {
  this.map = {}
  this.set = []
};

/**
* Inserts a value to the set. Returns true if the set did not already contain the specified element. 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  if (this.map[val] != undefined) return false
  this.set.push(val)
  this.map[val] = this.set.length-1
  return true
};

/**
* Removes a value from the set. Returns true if the set contained the specified element. 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
  const index = this.map[val]
  if (index !== undefined) {
    if (index !== this.set.length - 1) {
      this.map[this.set[this.set.length - 1]] = index
      swap(this.set, index, this.set.length-1)
    }
    delete this.map[val]
    this.set.pop()
    return true
  } 
  return false
};

/**
* Get a random element from the set.
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
  const randomIndex = Math.floor(Math.random() * (this.set.length))
  return this.set[randomIndex]
};

/** 
* Your RandomizedSet object will be instantiated and called as such:
* var obj = new RandomizedSet()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/