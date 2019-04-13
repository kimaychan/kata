const Calculator = function() { 
	this.evaluate = string => {
		var split = string.replace(/\s/g, "")
			.split(/([+*\/-])/)
			.map(n => n.match(/[0-9]/) ? parseFloat(n) : n)
		if (split.length == 1) return parseFloat(string)
		var math = {
			'/': { order: 2, calculate: function (x, y) { return x / y } },
			'*': { order: 2, calculate: function (x, y) { return x * y } },
			'-': { order: 1, calculate: function (x, y) { return x - y } },
			'+': { order: 1, calculate: function (x, y) { return x + y } }
		}
			var i = 0, 
				operands = [],
				operators = []
	
		while(i < split.length) {
			if (split[i].toString().match(/[+*-\/]/)) {
				while(operators.length !=0 && math[split[i]].order <= math[operators[operators.length-1]].order) {
					let n2 = operands.pop(), n1 = operands.pop() 
					operands.push(math[operators.pop()].calculate(n1, n2))
				}
				operators.push(split[i])
			} 
			if (split[i].toString().match(/[0-9]/)) 
				operands.push(split[i])
			i++
		}
		while(operators.length!=0) {
			let n2 = operands.pop(), n1 = operands.pop() 
			operands.push(math[operators.pop()].calculate(n1, n2))
		}
		return operands[operands.length-1]
	}
};

//Finished 03-09-2019