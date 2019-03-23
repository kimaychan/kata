/**
 * Given a string s consists of upper/lower-case alphabets and empty space characters ' ', 
 * return the length of last word in the string. 
 * If the last word does not exist, return 0.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
	var words = s.match(/\b(\w+)\b/g)
	return words ? words[words.length-1].length : ""
};

/* Leetcode: Runtime: 56 ms, faster than 85.84% of JavaScript online submissions for Length of Last Word.
Memory Usage: 33.4 MB, less than 100.00% of JavaScript online submissions for Length of Last Word.*/

//03-22-2019