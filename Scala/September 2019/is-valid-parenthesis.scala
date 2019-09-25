/*
  Write a function that takes a string of braces, and determines if the order of the braces 
  is valid. It should return true if the string is valid, and false if it's invalid.
  This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [],
  and curly braces {}.
  
  All input strings will be nonempty, and will only consist of parentheses, brackets and 
  curly braces: ()[]{}.
*/

object Kata {

  def validBraces(s: String): Boolean = {
    val pattern = "(\\{\\}|\\(\\)|\\[\\])".r
    def aux(str: String): String = {
      if (str == "") return ""
      else {
        val matches = pattern findAllMatchIn str
        if (matches.isEmpty) str
        else aux(pattern.replaceAllIn(str, ""))
      }
    }
    aux(s) == ""
  }
}

// 09-25-19