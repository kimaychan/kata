/**
 * Given an array of integers, find if the array contains any duplicates.
 * Your function should return true if any value appears at least twice in the array, 
 * and it should return false if every element is distinct.
 * 
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
  let i = 0
  while (i < nums.length) {
    if (nums.indexOf(nums[i]) != nums.lastIndexOf(nums[i]))
      return true
    i++
  }
  return false
};

//10-30-19