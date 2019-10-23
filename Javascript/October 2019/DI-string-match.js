/**
 * Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.
 * Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:
 * 
 *    If S[i] == "I", then A[i] < A[i+1]
 *    If S[i] == "D", then A[i] > A[i+1]
 * 
 * @param {string} S
 * @return {number[]}
 */

var diStringMatch = function(S) {
  var inc = 0, 
    dec = S.length,
    output = []
  
  for (let i = 0; i <= S.length; i++) {
    if (S[i] == "I" || (!S[i] && inc < S.length)) {
      output.push(inc)
      inc++
    } else {
      output.push(dec)
      dec--
    }
  }
  return output
};

// 10-23-19