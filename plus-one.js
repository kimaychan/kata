/**
 * Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
 * The digits are stored such that the most significant digit is at the head of the list, and 
 * each element in the array contain a single digit.
 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 * 
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
	var carry = 0, res = []
	for(let i = digits.length-1; i >= 0; i--) {
		let sum = (i == digits.length - 1 ? digits[i] + 1 : parseInt(digits[i]) + carry).toString()
		carry = sum.length > 1 ? parseInt(sum[0]) : 0
		res.unshift(sum[sum.length-1])
	}
	if (carry != 0) res.unshift(carry)
	return res
};

//03-25-2019