/*
* In this Kata, you have to design a simple routing class for a web framework.
* The router should accept bindings for a given url, http method and an action.
* Then, when a request with a bound url and method comes in, it should return the 
* result of the action.
*/

class Router() {
  private var data: Map[String, String] = Map()
  def bind(url: String, request: String, f: () => String): Unit = 
    data = data ++ Map(request+url -> f())
  def runRequest(url: String, request: String): String = 
    data.getOrElse(request+url, "Error 404: Not Found")
}

// 09-23-19