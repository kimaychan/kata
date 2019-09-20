/**
 * The string is called prime if it cannot be constructed by concatenating
 * some (more than one) equal strings together. 
 * For example, "abac" is prime, but "xyxy" is not("xyxy"="xy"+"xy"). 
 * 
 * Given a string determine if it is prime or not.
 */

object Kata {
  def primeString(s: String): Boolean = 
    (s + s).indexOf(s, 1) == s.length
}

// 09-20-19