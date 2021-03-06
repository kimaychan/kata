/**
 * Write an algorithm to determine if a number is "happy". 
 * A happy number is a number defined by the following process: Starting with any positive integer, 
 * replace the number by the sum of the squares of its digits, and repeat the process until the 
 * number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. 
 * Those numbers for which this process ends in 1 are happy numbers.
 * 
 * 
 * sana all happy
 * 
 * @param {number, array} 
 * @return {boolean}
 */

var isHappy = function(n, cycle) {
  cycle = cycle || []
  cycle.push(n)
  
  if (n < 0) return false
  
  const sum = n.toString()
    .split("")
    .reduce((res, val) => res + (val ** 2) , 0)

  if (sum == 1) return true
  if (cycle.includes(sum)) return false
  
  return isHappy(sum, cycle)
};

// 11-25-19