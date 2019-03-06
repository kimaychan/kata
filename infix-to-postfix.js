function toPostfix (infix) {
  var expression = "",
    stack = [],
    precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
      '^': 3
    }
  
  var i = 0
  
  while(i < infix.length) {
    if (infix[i].match(/[0-9]/)) 
      expression+=infix[i]
    else {
      if (infix[i] == ")") {
        var pop = stack.pop()
        while(pop != "(") {
          expression+=pop
          pop = stack.pop()
        }
      } else { 
        if (infix[i].match(/[+*-\/]/)) {
          while(stack.length !=0 && precedence[infix[i]] <= precedence[stack[stack.length-1]]) {
            expression+=stack.pop()
          }
        } 
        stack.push(infix[i])
      }
    }
    
    i++
  }
  
  while(stack.length!=0) {
    expression+=stack.pop()
  }
  
  return expression
}