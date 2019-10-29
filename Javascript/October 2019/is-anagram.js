/**
 * Given two strings s and t , write a function to determine if t is an anagram of s.
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  return s.split("").sort().join("") == t.split("").sort().join("")
};

// 10-29-19