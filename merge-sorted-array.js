/**
 * Given two sorted integer arrays nums1 and nums2, 
 * merge nums2 into nums1 as one sorted array.
 * 
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
	let i = 0, n2Count = 0
	while(i < nums1.length && n2Count < n) {
		if ([0, undefined].includes(nums1[i])) {
			nums1[i] = nums2[n2Count]
			n2Count+=1
		}
		i++
	}
	nums1 = nums1.sort((a,b)=>a-b)
}; 

//04-02-2019