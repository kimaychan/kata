/*** 
 * Task: 
 * Complete the method/function so that it converts dash/underscore
 * delimited words into camel casing. The first word within the output
 * should be capitalized only if the original word was capitalized.
*/
function toCamelCase(str){
  return str.replace(/(([^a-zA-Z])\w)/g, x => x[1].toUpperCase())
} 

//03-14-2019