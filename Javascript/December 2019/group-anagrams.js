/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
  return Object.values(
    strs.reduce((r,v) => {
      let sortedChars = v.split("").sort().join("")
      r[sortedChars] = r[sortedChars] || []
      r[sortedChars].push(v)
      return r
    } , {})
  )
};

// 12-05-2019