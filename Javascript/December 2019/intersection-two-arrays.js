/**
 * Given two arrays, write a function to compute their intersection.
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function(nums1, nums2) {
    
  let n1 = 0, 
    n2 = 0, 
    sortedN1 = nums1.sort((a,b) => a-b),
    sortedN2 = nums2.sort((a,b) => a-b),
    result = []
  
  while (n1 < nums1.length && n2 < nums2.length) {
    if (sortedN1[n1] < sortedN2[n2]) 
      n1++
    else if(sortedN2[n2] < sortedN1[n1])
      n2++
    else {
      result.push(sortedN1[n1])
      n1++
      n2++
    }
  }
  
  return result
};

// 12-04-19