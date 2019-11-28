/**
 * Reverse bits of a given 32 bits unsigned integer.
 * 
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  const addPadding = (biArr) => {
    let padLength = 32 - biArr.length
    while(padLength > 0) {
      biArr.unshift("0")
      padLength--
    }
    return biArr
  }
  
  const padded = addPadding(n.toString(2).split(""))
  
  return parseInt(padded.reverse().join(""), 2)
};

// 11-28-19