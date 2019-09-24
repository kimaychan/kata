/* In this kata your mission is to rotate matrix counter - clockwise N-times. */

object RotateAgainstClockwise {
  def rotate(matrix: List[List[Int]], times: Int) : List[List[Int]] = {
    def rotateX(m: List[List[Int]]): List[List[Int]] = 
      m.head.indices.map(i => m.map(_(i))).reverse.toList
    if (matrix == null) null
    else if (times == 0 || matrix(0) == List()) matrix
    else rotate(rotateX(matrix), times-1)
  }
}

// 09-24-19