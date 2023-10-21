/**
  * Can you find the needle in the haystack?
  * Write a function findNeedle() that takes an array full of junk but containing one "needle"
  * After your function finds the needle it should return a message (as a string) that says: "found the needle at position " plus the index it found the needle, so:
    Example(Input --> Output)
    ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
  */

def findNeedle(haystack: List[String]): String = {
  val index = haystack.indexWhere(_ == "needle")
  s"found the needle at position $index"
}