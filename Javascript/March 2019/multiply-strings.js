/**
 * Given two non-negative integers num1 and num2 represented as strings, 
 * return the product of num1 and num2, also represented as a string.
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
	if ([num1, num2].includes("0")) return "0"
	var n1 = num1.toString(2).split("").reverse(),
			n2 = num2.toString(2).split("").reverse(),
			result = "0"
	
	var addLongNumbers = function(num1, num2) {
		if ([num1, num2].includes("0")) 
			return num1 == "0" ? num2 : num1
		
		num1 = num1.split("").reverse()
		num2 = num2.split("").reverse()
		let it = 0, c = 0, res = []
		while (it < Math.max(num1.length, num2.length)) {
			let s = (parseInt(num1[it] || 0) + parseInt(num2[it] || 0) + c).toString()
			c = s.length > 1 ? parseInt(s[0]) : 0
			res.unshift(parseInt(s[s.length-1]))
			it++
		}

		if (c!="0") res.unshift(c)
		return res.join("")
	}
	
	for (let i = 0; i < n2.length; i++) {
		let carry = 0, sum = []
		for (let j = 0; j < n1.length; j++) {
			let prod = ((n2[i] * n1[j]) + carry).toString()
			carry = prod.length > 1 ? parseInt(prod[0]) : 0
			sum.unshift((prod[prod.length-1]))      
		}
		let s = carry != 0 ? (carry.toString() + sum.join("")) + '0'.repeat(i) : sum.join("") + '0'.repeat(i)
		result = addLongNumbers(result, s)
	}
  return result.toString()
};

//03-21-2019