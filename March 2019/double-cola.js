/** 
 * Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink 
 * vending machine; there are no other people in the queue. The first one in the queue 
 * (Sheldon) buys a can, drinks it and doubles! The resulting two Sheldons go to the end 
 * of the queue. Then the next in the queue (Leonard) buys a can, drinks it and gets to
 * the end of the queue as two Leonards, and so on.
 * 
 * Write a program that will return the name of the person who will drink the n-th cola.
*/

function whoIsNext(names, r){
	let i = 0,
		n = 1,
		ctr = 0
	
	while (i < r) {
		if (ctr == names.length) {
			n*=2
			ctr = 0
		} else {
			i+=n
			ctr++
		}
	}
	return names[ctr-1]
}

//3-15-2019