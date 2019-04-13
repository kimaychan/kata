/**
 * Write a function that returns the sum of two numbers. 
 * The input numbers are strings and the function must return a string.
 */

function add(a, b) {
  var n1 = a.split(""),
    n2 = b.split("")
  
  let carry = 0, result = []

  while(n1.length > 0 || n2.length > 0) {
    let sum = parseInt(n1.pop() || 0) + parseInt(n2.pop() || 0) + carry
    carry = sum / 10 >= 1 ? Math.floor(sum/10) : 0
    sum %= 10
    result.unshift(sum)
  }
  if (carry != 0) result.unshift(carry)
  
  return result.join("")
}

//04-12-2019