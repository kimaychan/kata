/**
 * Given a non-empty array of integers, return the k most frequent elements.
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let sn = nums.reduce((r, v, k) => {
    r[v] = r[v] || 0
    r[v] += 1
    return r
  }, {})
  return Object.keys(sn).sort((a, b) => sn[b] - sn[a]).slice(0, k)
};

// 09-18-2019