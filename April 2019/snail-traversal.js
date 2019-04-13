/**
 * Given an n x n array, return the array elements arranged 
 * from outermost elements to the middle element, traveling clockwise.
 */

snail = function(array) {
  var res = []
  
  let r = 0, isDirectionUp = true
  while (array.length > 0) {    
    if (r == 0 && isDirectionUp) { 
      res = res.concat(array.shift())
      isDirectionUp = false
    } else {
      if (r == array.length-1 && !isDirectionUp) {
        res = res.concat(array.pop().reverse())
        isDirectionUp = true
      } else 
        res.push(isDirectionUp ? array[r].shift() : array[r].pop())
      if (isDirectionUp) r-- 
      else r++
    }
  }
  return res
}

//04-11-2019