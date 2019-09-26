/**
 * Given an array of integers and an integer k, 
 * you need to find the total number of continuous subarrays whose sum equals to k.
 */

var subarraySum = function(nums, k) {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    let s = 0, j = i
    while (j < nums.length) {
      s += nums[j]      
      if (s == k) count += 1
      j++
    }
  }
  return count
};

// 09-26-19