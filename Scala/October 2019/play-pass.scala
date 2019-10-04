/*
  Everyone knows passphrases. 
  One can choose passphrases from poems, songs, movies names and so on but frequently they 
  can be guessed due to common cultural references. You can get your passphrases stronger 
  by different means. One is the following:

  choose a text in capital letters including or not digits and non alphabetic characters,

  1. shift each letter by a given number but the transformed letter must be a letter 
    (circular shift),
  2. replace each digit by its complement to 9,
  3. keep such as non alphabetic and non digit characters,
  4. downcase each letter in odd position, upcase each letter in even position (the first 
    character is in position 0),
  5. reverse the whole result.
*/

object PlayPass {

  def playPass(s: String, n: Int): String = {
    val alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    val numRegex = "([0-9])".r
    val letterRegex = "([A-Z])".r
    s.split("")
      .zipWithIndex
      .map(t => {
          t._1 match { 
            case letterRegex(t._1) => { 
              val in = alphabet.indexOf(t._1) + n
              val i = if (in > 25) in - 26 else in
              if (t._2 % 2 != 0) alphabet(i).toLower
              else alphabet(i)
            }
            case numRegex(t._1) => 9-(t._1.toInt)
            case _ => t._1
          }
      }).mkString("").reverse
  }
}

//10-04-19