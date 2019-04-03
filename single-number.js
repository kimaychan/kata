/**
 * Given a non-empty array of integers, every element appears twice except for one. 
 * Find that single one.
 * 
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  return nums.find(x=> nums.indexOf(x) == nums.lastIndexOf(x))
};

//04-03-2019