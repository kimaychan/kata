/**
 * Write a function that takes an unsigned integer and return the number of '1' bits it has 
 * (also known as the Hamming weight).
 * 
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  if (n == 0) return 0
  return n.toString(2).match(/1/g).length
};

// 11-26-19