/**
 * Count the number of prime numbers less than a non-negative number, n.
 * 
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let memo = [], count = 0
  for (let i = 0; i < n; i++) {
    memo[i] = true
  }
  for (let i = 2; i < n; i++) {
    if (memo[i] === true) 
      count++
    for (let j = i * i; j < n; j = j + i) {
      memo[j] = false
    }
  }
  return count
};