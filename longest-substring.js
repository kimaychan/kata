var lengthOfLongestSubstring = function(s) {
  var longestStr = [], 
      dictionary = {}, 
      result = 0

for(let i=0; i < s.length; i++){
  if (longestStr.includes(s[i])) {
    if (longestStr.length <= 1)
      longestStr = []
    else longestStr.splice(0, longestStr.indexOf(s[i]) + 1)
  } 
  
  longestStr.push(s[i])
  dictionary[longestStr.join('')] = longestStr.length    
}

for(let v in dictionary) {
    result = dictionary[v] > result ? dictionary[v] : result
  }
  
  return result
};