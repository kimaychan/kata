/** 
 * Write a function dirReduc which will take an array of strings and 
 * returns an array of strings with the needless directions removed 
 * (W<->E or S<->N side by side).
*/

function dirReduc(arr){
	var regex = new RegExp("(NORTHSOUTH|SOUTHNORTH|WESTEAST|EASTWEST)","g"),
		res = (arr.join("")).replace(regex, () =>""),
		match;
	while (match = regex.exec(res)) {
		res = res.replace(regex, () =>"")
	}
	res = res.split(/(NORTH|SOUTH|EAST|WEST)/).filter(x=>x)
	return res || []
}