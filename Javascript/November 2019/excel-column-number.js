/**
 * Given a column title as appear in an Excel sheet, return its corresponding column number.
 * 
 * For example:
 *    A -> 1
 *    B -> 2
 *    C -> 3
 *    ...
 *    Z -> 26
 *    AA -> 27
 *    AB -> 28 
 */

var titleToNumber = function(s) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
  return s.split("")
    .reduce((r, v, i) => {
      r += (26 ** (s.length - (i+1))) * (alphabet.indexOf(v) + 1)            
      return r
    }, 0) 
};

// 11-12-19