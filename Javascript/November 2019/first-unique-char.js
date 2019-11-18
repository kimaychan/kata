/**
 * Given a string, find the first non-repeating character in it and return it's index. 
 * If it doesn't exist, return -1.
 * 
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function(s) {
  let i = 0
  while (i < s.length) {
    if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) return i
    i++
  }
  return -1
};

// 11-18-19