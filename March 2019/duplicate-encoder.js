/***
 * Task:
 * The goal of this exercise is to convert a string to a new string where each 
 * character in the new string is '(' if that character appears only once in the 
 * original string, or ')' if that character appears more than once in the original string. 
 * Ignore capitalization when determining if a character is a duplicate.
*/

function duplicateEncode(word){
  return word.split("")
    .map(c => {
      let regex = ['[', '\\', '^', '$', '.', '|', '?', '*', '+', '(', ')'].includes(c) ? new RegExp('\\'+c, 'ig') : new RegExp(c, 'ig') 
      return word.match(regex).length > 1 ? ")" : "("
    }).join("")
}

//03-14-2019