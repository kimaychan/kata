var searchInsert = function(nums, target) {
  var index = nums.findIndex(x => x === target)
  if (index > -1) return index
  let i = 0
  while(i <= nums.length-1) {
    if (nums[i] > target) return i
    i++
  }
  return nums.length
};