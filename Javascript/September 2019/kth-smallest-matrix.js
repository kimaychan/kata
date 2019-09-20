/**
 * Given a n x n matrix where each of the rows and columns are sorted in ascending order, 
 * find the kth smallest element in the matrix.
 */

var kthSmallest = function(matrix, k) {
  return matrix.reduce((r, v) => {
    r = r.concat(v)
    return r
  }, []).sort((a,b)=>a-b)[k-1]
};

// 09-20-2019