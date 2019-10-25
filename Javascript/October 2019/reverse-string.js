/**
 * Write a function that reverses a string. 
 * The input string is given as an array of characters char[]. 
 * Do not allocate extra space for another array, you must do this by modifying the 
 * input array in-place with O(1) extra memory.
 * 
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
*/

var reverseString = function(s) {
  let start = 0,
    end = s.length - 1
  while(start <= s.length / 2 && end >= s.length / 2) {
    let temp = s[start]
    s[start] = s[end]
    s[end] = temp
    start++
    end--
  }
};
//10-25-19