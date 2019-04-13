/**
 * Given two binary strings, return their sum 
 * (also a binary string). The input strings are both 
 * non-empty and contains only characters 1 or 0.
 */

 /**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {    
	var n1 = a.split("").reverse(), 
			n2 = b.split("").reverse(),
			i = 0,
			carry = 0,
			result = ""
	while(i < Math.max(n1.length, n2.length)) {
		let sum = ((parseInt(n1[i]) || 0) + (parseInt(n2[i]) || 0) + carry).toString(2)
		carry = sum.length > 1 ? parseInt(sum[0]) : 0
		result = sum[sum.length-1] + result
		i++
	}
	if (carry != 0) result = carry + result
	return result
};

//03-19-2019