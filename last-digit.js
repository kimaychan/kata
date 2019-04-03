/**
 * Define a function that takes in two non-negative integers a and b and 
 * returns the last decimal digit of a^b. Note that a and b may be very large!
 */

var lastDigit = function(str1, str2){  
	if (str2 == 0) return 1
	let exp = str2.toString().slice(-2) % 4 == 0 ? 4 : str2.toString().slice(-2) % 4
	return (str1.toString().slice(-1) ** exp) % 10
}

//04-03-2019