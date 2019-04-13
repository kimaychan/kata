/**
 * Produce a string in which each lowercase letters of s1 or s2 appears as many times 
 * as its maximum if this maximum is strictly greater than 1; these letters will be 
 * prefixed by the number of the string where they appear with their maximum value and :. 
 * If the maximum is in s1 as well as in s2 the prefix is =:.
 * 
 * In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains 
 * the prefix) will be in decreasing order of their length and when they have the same 
 * length sorted in ascending lexicographic order (letters and digits - more precisely 
 * sorted by codepoint); the different groups will be separated by '/'.
 */

function mix(s1, s2) {
  var str = (s1+s2)
    .split("")
    .reduce((res, v, k) => {
      let id = k > s1.length-1 ? 2 : 1
      if (v.match(/([a-z])/g)) {
        res[v] = res[v] || {}
        res[v][id] = res[v][id] || ":"
        res[v][id] += v
      }
      return res
    }, {})

  var resUnsorted = Object.keys(str)
    .reduce((res, v, i) => {
      let s1 = ((str[v] || {})['1'] || []).length, s2 = ((str[v] || {})['2'] || []).length
      let s = s1 == s2 ? "="+str[v][1] : s1 > s2 ? "1"+str[v][1] : "2"+str[v][2]
      if (s.length>=4) {
        res[s.length] = res[s.length] || []
        res[s.length].push(s)
      }
      return res
    }, {})
  
  return Object.keys(resUnsorted).reduce((res, v) => {
    return resUnsorted[v].sort().concat(res)
  }, []).join("/")
}

// 04-10-2019