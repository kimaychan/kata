/*
 * Given an array of integers, return a new array with each value doubled.For example: [1, 2, 3] --> [2, 4, 6]
 **/

object Kata {

  def maps(xs: List[Int]): List[Int] =
    xs.map(_ * 2)
}