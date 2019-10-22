/**
 * Given an array of integers arr, write a function that returns true if and only if the 
 * number of occurrences of each value in the array is unique.
 * 
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let groupedOccurences = arr.reduce((r, v) => {
    r[v] = r[v] || 0
    r[v] += 1
    return r
  }, {})
  let occurrences = Object.keys(groupedOccurences).map(v => groupedOccurences[v]), 
    i = 0
  while(i < occurrences.length) {
    if (occurrences.findIndex((v) => v == occurrences[i]) != i)
      return false
    else i++
  }
  return true
};

// 10-22-19
