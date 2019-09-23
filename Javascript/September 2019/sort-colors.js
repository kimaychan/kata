/** 
 * Given an array with n objects colored red, white or blue, sort them in-place so that objects 
 * of the same color are adjacent, with the colors in the order red, white and blue. 
 * Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue 
 * respectively.
 */

var sortColors = function(nums) {
  let swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  let r = 0, b = nums.length - 1, i = 0
  while (i <= b) {
    switch(nums[i]) {
      case 0: swap(nums, i, r)
        r++
        i++
        break;
      case 2: swap(nums, i, b)
        b--
        break;
      default: 
        i++
        break;
    }
  }
};

// 09-23-19