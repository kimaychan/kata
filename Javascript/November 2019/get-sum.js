/**
 * Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
 * 
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  if (b != 0) {
    let carry = a & b
    a = a ^ b
    b = carry << 1
    return getSum(a,b)
  }
  return a
};

// 11-19-19