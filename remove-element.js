var removeElement = function(nums, val) {
  let i = nums.length-1
  while(i >= 0) {
      if (nums[i] == val) nums.splice(i, 1)
      i-=1
  }
  return nums.length
};