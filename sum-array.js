/** 
 * Sum all the numbers of the array (in F# and Haskell you get a list) except 
 * the highest and the lowest element (the value, not the index!).
 * (The highest/lowest element is respectively only one element at each edge,
 * even if there are more than one with the same value!)
*/

function sumArray(array) {
	if (!array || array.length == 0) return 0
	var greatest = Math.max(...array), 
		lowest = Math.min(...array)
	return array.reduce((res, v, k, arr) => {
		return [array.indexOf(greatest), array.indexOf(lowest)].includes(k) ? res : res+v
	}, 0)
}

//03-21-2019