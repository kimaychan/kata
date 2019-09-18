/**
 * Given n pairs of parentheses, write a function to generate all combinations 
 * of well-formed parentheses.
 */

var generateParenthesis = function(n) {
  var generate = (l, r, str, result) => {
    if (l == 0 && r == 0) result.push(str)
    if (l > 0) generate(l-1, r, str + "(", result)
    if (r > 0 && l < r) generate(l, r-1, str + ")", result)
    return result
  }
  return generate(n, n, "", [])
};