def findNeedle(haystack: List[String]): String = {
  val index = haystack.indexWhere(_ == "needle")
  s"found the needle at position $index"
}