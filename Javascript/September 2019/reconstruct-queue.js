/**
 * Suppose you have a random list of people standing in a queue. 
 * Each person is described by a pair of integers (h, k), where h is the height of the 
 * person and k is the number of people in front of this person who have a height greater 
 * than or equal to h. Write an algorithm to reconstruct the queue.
 */

var reconstructQueue = function(people) {    
  var sortedByHeight = people.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : b[0] - a[0]), 
    result = []
  
  for (let i = 0; i < sortedByHeight.length; i++) {
    for (let j = result.length; j > sortedByHeight[i][1]; j--) {
      result[j] = result[j-1]
    }
    result[sortedByHeight[i][1]] = sortedByHeight[i]
  }
  return result
}