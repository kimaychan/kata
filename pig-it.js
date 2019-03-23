/** 
 * Move the first letter of each word to the end of it, 
 * then add "ay" to the end of the word. 
 * Leave punctuation marks untouched.
*/

function pigIt(str){
	return str.split(" ")
		.map(s => s.match(/\w/) ? s.substring(1, s.length) + s.substring(0,1) + "ay" : s)
		.join(" ")
	}
	
//03-22-2019