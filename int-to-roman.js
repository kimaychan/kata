var intToRoman = function(num) {
	var dictionary = {
		'1': 'I', 
		'1.5': 'V',
		'2': 'X',
		'2.5': 'L',
		'3': 'C',
		'3.5': 'D',
		'4': 'M'
	}

	return num.toString()
		.split("")
		.reduce((result, n, i, arr) => {
			if (n != 0) {
				let decimalPlace = arr.length-i
				if (n < 4) 
					return result + dictionary[decimalPlace].repeat(n)
				if (n == 4)
					return result + dictionary[decimalPlace] + dictionary[decimalPlace+.5]
				if (n == 5)
					return result + dictionary[decimalPlace+.5] 
				if (n == 9)
					return result + dictionary[decimalPlace] + dictionary[decimalPlace+1] 
				if (n < 9)
					return result + dictionary[decimalPlace+.5] + dictionary[decimalPlace].repeat(n-5)
			} else return result
		}, "")
};

//03-13-2019