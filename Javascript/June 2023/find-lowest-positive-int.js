/**
 * Given an array of integers, find the first missing positive integer in linear 
 * time and constant space. In other words, find the lowest positive integer 
 * that does not exist in the array. The array can contain duplicates and 
 * negative numbers as well. 
 * 
 * For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] 
 * should give 3.
 */

const findLowestPositive = (arr) => {
  const sorted = [...arr].sort()
  let i = 0
  let missing = undefined
  do {
    const next = sorted[i + 1]
    const current = sorted[i]
    if (next > 0 && current > 0) {
      if (next !== current + 1) {
        missing = current + 1
      }
    }
    i += 1
  } while (missing === undefined && i < sorted.length)
  if (!missing) {
    missing = sorted[sorted.length - 1] + 1
  }
  return missing
}

console.log(findLowestPositive([3, 4, -1, 1]))


function sayHello(n){
  for(let i=0;i<n;i++){
    console.log("Hello")
  }
}
sayHello(3)