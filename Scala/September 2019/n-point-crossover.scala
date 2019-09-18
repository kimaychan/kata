/*
  In genetic algorithms, a crossover allows 2 chromosomes to exchange part of their genes.

  For more details, you can visit these wikipedia links : Genetic algorithm and Crossover.

  A chromosome is represented by a list of genes.
  Consider for instance 2 chromosomes xs (with genes [x,x,x,x,x,x]) and ys (with genes [y,y,y,y,y,y])

  We want to generalize this to the notion of n-point crossover, and create a generic function.
*/

object NPointCrossover extends App {
  def crossover[T](ns: List[Int], xs: List[T], ys: List[T]): (List[T], List[T]) = {
    def aux(x: List[T], y: List[T], isCross: Boolean = false, i: Int = 1, acc: (List[T], List[T]) = (List(), List())): (List[T], List[T]) = {
      if (x.isEmpty && y.isEmpty) acc
      else aux(x.tail, y.tail, if (ns.contains(i)) !isCross else isCross, i+1, if (isCross) (acc._1 :+ y.head, acc._2 :+ x.head) else (acc._1 :+ x.head, acc._2 :+ y.head))
    }
    aux(xs, ys, ns.contains(0))
  }
}

// 09-18-2019