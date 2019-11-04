/**
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, 
 * find the one that is missing from the array.
 * 
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function(nums) {
  let i = 0
  while (i <= nums.length) {
    if (!nums.includes(i))
      return i
    i++
  }
};