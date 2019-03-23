/**
 * Given a string, determine if it is a palindrome, considering only alphanumeric 
 * characters and ignoring cases. Note: For the purpose of this problem, we define 
 * empty string as valid palindrome.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	if (s.length <=1) return true
	const compressed = s.toLowerCase().replace(/\W+/g, "")
	return compressed.split("").reverse().join("") === compressed
};

//03-22-2019