var longestCommonPrefix = function(strs) {
  if (strs.length <= 1) return strs[0] || ""
  for(let i = 0 ; i < strs[0].length; i++) {
      let c = strs[0][i]
      for(let j = 1; j<strs.length; j++) {
          if (i == strs[j].length || strs[j][i] != c)
              return strs[0].substring(0, i)
      }
  }
  return strs[0]
};