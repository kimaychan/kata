var isValid = function(s) {
  if (s.length % 2 !== 0) return false
  var dictionary = {
    '{': '}',
    '[': ']',
    '(': ')'
  }, i = 0
 
  while (i<s.length) {
      if (Object.keys(dictionary).includes(s[i+1])) {
        i++
      } else {
        if (s[i+1] === dictionary[s[i]]) {
          s = s.split("").filter((v,k) => ![i, i+1].includes(k)).join("")
          if (i > 0)
            i--
        } else 
          return false
      }
  }
  
  return s.length == 0
};