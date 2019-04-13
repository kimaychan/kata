/**
 * Your work is implement the decorate(fn) function. 
 * Note that this function takes the function to decorate. 
 * The decorate(fn) function can also receive the parameters passed to 
 * the decorator functions. 
 */

function Decorator(options) {
  if (!options) {
    options = {};
  }
  this.before = options.before;
  this.after = options.after;
}
  
Decorator.prototype.decorate = function decorate(fn, ...args) {
  var before = this.before, after = this.after
  return function() {
    if (before) return fn(...before(...args, ...arguments))
    if (after) return after(...args, fn(...arguments))
    if (!after && !before) return fn(...arguments)
  }
};