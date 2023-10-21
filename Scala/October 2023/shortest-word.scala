/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

object Shortest {

  def findShort(str: String): Int = str.split(" ").map(_.length).min
}

// October 22, 2023