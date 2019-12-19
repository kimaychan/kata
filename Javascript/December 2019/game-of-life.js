/**
 * According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
 * 
 * Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):
 * 
 *  Any live cell with fewer than two live neighbors dies, as if caused by under-population.
 *  Any live cell with two or three live neighbors lives on to the next generation.
 *  Any live cell with more than three live neighbors dies, as if by over-population..
 *  Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
 * 
 * Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.
 *  @param {number[][]} board
 *  @return {void} Do not return anything, modify board in-place instead.
 */

var gameOfLife = function(board) {
  const getNeighbors = (brd, row, col) => {
    let neighbors = { '1': 0, '0': 0 },
      rmin = row == 0 ? row : row-1,
      rmax = row == brd.length - 1 ? row : row + 1
    for (let r = rmin; r <= rmax; r++) {
      let cmin = col == 0 ? col : col-1,
        cmax = col == brd[r].length - 1 ? col : col + 1
      for (let c = cmin; c <= cmax; c++) {
        if (!(c == col && r == row))
          neighbors[brd[r][c]] += 1
      }
    }
    return neighbors
  }
  
  let boardCopy = [...(board.map(r=>[...r]))]
  
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      let neighbors = getNeighbors(boardCopy, r, c)
      if (board[r][c] == 1) {
        if (neighbors[1] < 2 || neighbors[1] > 3) board[r][c] = 0
      } else {
        if (neighbors[1] == 3) board[r][c] = 1
      }
    }
  }
}