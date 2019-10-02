object Kata {

  def narcissistic(n: Int): Boolean = {
    val ns = n.toString
    val res = ns.split("")
      .foldLeft(0)((r, v) => (r + scala.math.pow(v.toDouble, ns.length).toInt))
    res == n
  }
}

// 10-02-19