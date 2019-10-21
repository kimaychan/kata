/**
 * Balanced strings are those who have equal quantity of 'L' and 'R' characters. 
 * Given a balanced string s split it in the maximum amount of balanced strings. 
 * Return the maximum amount of splitted balanced strings.
 * 
 * @param {string} s
 * @return {number}
 */

var balancedStringSplit = function(s) {
  var isBalanced = (str) => {
    let balances = str.split("")
      .reduce((r, v) => { 
        r[v] += 1 
        return r
      }, { 'R': 0, 'L': 0 })
    return balances["R"] == balances["L"] 
  }
  
  let str = "", splits = []
  for (let i = 0; i < s.length; i++) {
    str += s[i]
    if (isBalanced(str)) {
      splits.push(str)
      str = ""
    }
  }
  return splits.length
};

// 10-21-19