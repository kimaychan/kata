object NPointCrossover extends App {
  def crossover[T](ns: List[Int], xs: List[T], ys: List[T]): (List[T], List[T]) = {
    def aux(x: List[T], y: List[T], isCross: Boolean = false, i: Int = 1, acc: (List[T], List[T]) = (List(), List())): (List[T], List[T]) = {
      if (x.isEmpty && y.isEmpty) acc
      else aux(x.tail, y.tail, if (ns.contains(i)) !isCross else isCross, i+1, if (isCross) (acc._1 :+ y.head, acc._2 :+ x.head) else (acc._1 :+ x.head, acc._2 :+ y.head))
    }
    aux(xs, ys, ns.contains(0))
  }
}