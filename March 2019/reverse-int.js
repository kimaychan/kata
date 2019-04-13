var reverse = function(x) {
	var reverseInt = function(n) {
		return n.toString()
			.split("")
			.reverse()
			.join("")
	}, reversedNumber = parseInt(reverseInt(x))
	
	return reversedNumber > Math.pow(2,31) ? 0 : x < 0 ? reversedNumber * -1 : reversedNumber
};