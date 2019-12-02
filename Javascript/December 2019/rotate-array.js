/**
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
*/

var rotate = function(nums, k) {
  const reverse = (arr, start, end) => {
    while (start < end) {
      let temp = arr[start]
      arr[start] = arr[end]
      arr[end] = temp
      start++
      end--
    }
  }
      
  k %= nums.length
  reverse(nums, 0, nums.length-1)
  reverse(nums, 0, k-1)
  reverse(nums, k, nums.length-1)
}

// 12-02-19