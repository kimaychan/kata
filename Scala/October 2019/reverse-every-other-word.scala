object Solution {
  def reverse(str: String): String = {
    str.split(" ").zipWithIndex.map(s => {
      if (s._2 % 2 != 0) s._1.reverse
      else s._1
    }).mkString(" ")
  }
}

// 10-01-19