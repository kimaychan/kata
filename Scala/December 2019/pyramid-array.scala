/**
 * Write a function that when given a number >= 0, returns an Array of ascending length subarrays.
 * ex. 
 *   pyramid(0) => [ ]
 *   pyramid(1) => [ [1] ]
 *   pyramid(2) => [ [1], [1, 1] ]
 *   pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
 * 
 * @param {Int} n
 * @return {List[List[]]} 
*/

object Kata {
  def pyramid(n: Int): List[List[Int]] = {
    def pyramidAux(i: Int , acc: List[List[Int]]): List[List[Int]] = {
      if (i == n) acc
      else pyramidAux(i+1, acc :+ (0 to i).map(x => 1).toList )
    }
    pyramidAux(0, List())
  }
}

// 12-02-19



