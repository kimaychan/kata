var removeDuplicates = function(nums) {
  if (nums.length == 0) return 0
  let i = nums.length-1
  while(i >= 0) {
      while ((j = nums.indexOf(nums[i], i+1)) != -1){
          nums.splice(j, 1)
      }
      i--
  }
  return nums.length
};