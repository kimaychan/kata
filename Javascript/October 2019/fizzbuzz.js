/**
 * Write a program that outputs the string representation of numbers from 1 to n. 
 * But for multiples of three it should output “Fizz” instead of the number and 
 * for the multiples of five output “Buzz”. For numbers which are multiples of 
 * both three and five output “FizzBuzz”.
 * 
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  var result = []
  for (let i = 1; i <= n; i++) {
    switch(true) {
      case i % 3 === 0 && i % 5 === 0: result.push("FizzBuzz")
        break;
      case i % 3 === 0: result.push("Fizz")
        break;
      case i % 5 === 0: result.push("Buzz")
        break;
      default: result.push(i.toString())
        break;
    }
  }
  return result  
};

//10-28-19