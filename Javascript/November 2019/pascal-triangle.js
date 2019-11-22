/**
 * Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

  if (numRows <= 0) return []
  
  let result = [[1]]
  for (let i = 1; i < numRows; i++) {
    let row = [1], prevRow = result[i-1]
    for (let j = 1; j < i; j++) {
      row.push(prevRow[j-1] + prevRow[j])
    }
    row.push(1)
    result.push(row)
  }
  
  return result
};

// 11-22-19