/*
  Create a function that takes a Roman numeral as its argument and returns its 
  value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
*/

object Roman {
  val dictionary = Map("I" -> 1, "IV" -> 4, "V" -> 5, "IX" -> 9, "X" -> 10, "XL" -> 40, "L" -> 50, "XC" -> 90, "C" -> 100, "CD" -> 400, "D" -> 500, "CM" -> 900, "M" -> 1000)
  def decode(roman: String): Int = {
    def decodeEach(n: List[String], acc: Int = 0): Int = {
      if (n.isEmpty) acc
      else {
        if (n.tail.isEmpty) acc + dictionary(n.head)
        else {
          if (dictionary(n.head) < dictionary(n.tail.head))
            decodeEach(n.tail.tail, acc + dictionary(n.head + n.tail.head))
          else decodeEach(n.tail, acc + dictionary(n.head))
        }
      }
    }
    decodeEach(roman.split("").toList)
  }
}

// 09-30-19