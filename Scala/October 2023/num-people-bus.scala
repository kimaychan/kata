object Bus {
  def number(busStops: List[(Int, Int)]): Int = {
    busStops.foldLeft(0) { 
      case (acc, (n1, n2)) => acc + n1 - n2
    }
  }
}