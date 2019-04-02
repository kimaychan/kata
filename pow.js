/**
 * Implement pow(x, n), which calculates x raised to the power n (xn).
 * 
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
	if (n == 0 || x == 1) return 1
	var res = n > 0 ? x : 1/x,
		exponent = Math.abs(n)
	if (exponent <= 30) {
		let i = 1
		while (i < exponent) { 
				if (n > 0) 
						res *= x
				else 
						res /= x
				i++
		}
	} else {
		if (exponent%30 !== 0) res = myPow(x, exponent%30)
		if (n >0) 
			res *= myPow(myPow(x, 30), Math.floor(exponent/30))          
		else 
			res /= myPow(myPow(x, 30), Math.floor(exponent/30))          
	}
	return res
};

/*Runtime: 64 ms, faster than 75.60% of JavaScript online submissions for Pow(x, n).
Memory Usage: 33.8 MB, less than 74.71% of JavaScript online submissions for Pow(x, n).*/

//04-02-2019