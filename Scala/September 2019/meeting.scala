object Meeting {

  def meeting(s: String): String = {
    s.split(";")
      .sortWith((a, b) => {
        val na = a.toLowerCase.split(":")
        val nb = b.toLowerCase.split(":")
        if (na.last == nb.last)
          na.head < nb.head
        else na.last < nb.last 
      })
      .map(s => "(" + s.split(":").reverse.map(_.toUpperCase).mkString(", ") + ")")
      .mkString("")
  }    
}

//09-19-2019