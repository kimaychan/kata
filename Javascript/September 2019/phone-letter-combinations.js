/**
 * Given a string containing digits from 2-9 inclusive, 
 * return all possible letter combinations that the number could represent.
 */

var letterCombinations = function(digits) {
  if (digits.length == 0) return []
  let dictionary = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  }, combinations = ['']
  
  for (let d = 0; d < digits.length; d++) {
    let letters = dictionary[digits[d]],
        temp = []
    for (let l = 0; l < letters.length; l++) {
      let lettersToAdd = letters[l]
      for (let c = 0; c < combinations.length; c++) {
        temp.push(combinations[c] + lettersToAdd)
      }
    }
    combinations = temp
  }
  return combinations.sort()
};