/**
 * You are given an n x n 2D matrix representing an image. 
 * Rotate the image by 90 degrees (clockwise).
 * 
 * Note:
 * You have to rotate the image in-place, which means you have to modify 
 * the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
 * 
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
	var newMatrix = []
	for (let r = 0; r < matrix.length; r++) {
		for(let c = 0; c < matrix[r].length; c++) {
			if (!newMatrix[c]) newMatrix.push([])
			newMatrix[c].unshift(matrix[r][c])
		}
	}
	for (let r = 0; r < newMatrix.length; r++) {
		for(let c = 0; c < newMatrix[r].length; c++) {
			matrix[r][c] = newMatrix[r][c]
		}
	}
};

/*
Runtime: 56 ms, faster than 95.17% of JavaScript online submissions for Rotate Image.
Memory Usage: 33.7 MB, less than 73.85% of JavaScript online submissions for Rotate Image.
*/

//04-02-2019