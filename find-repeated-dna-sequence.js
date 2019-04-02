/**
 * All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, 
 * for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify 
 * repeated sequences within the DNA. Write a function to find all the 10-letter-long 
 * sequences (substrings) that occur more than once in a DNA molecule.
 * 
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
	var res = []
	for(let i = 0; i < s.length; i++) {
		var slice = s.slice(i, i+10)
		if ((s.slice(i+1,s.length)).match(slice) && !res.includes(slice)) res.push(slice)
	}   
	return res
};

//04-02-2019