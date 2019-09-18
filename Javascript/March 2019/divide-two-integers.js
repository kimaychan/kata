var divide = function(dividend, divisor) {
	if (Math.abs(divisor) == 1) {
			var answer = ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) ? Math.abs(dividend) : (dividend > 0) ? -dividend: dividend
			return answer >= 2147483647 ? 2147483647 : answer
	}
	var res = 0, 
			n1 = Math.abs(dividend),
			n2 = Math.abs(divisor)
	while (n1 >= 0) {
			n1-=n2
			if (n1 >= 0) res+=1
	}
	return (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0) ? res : -res
};

//Finished 03-09-2019