/*
You want to create secret messages which can be deciphered by the Decipher this! kata. 
Here are the conditions:
  Your message is a string containing space separated words.
  You need to encrypt each word in the message using the following rules:
  The first letter needs to be converted to its ASCII code.
  The second letter needs to be switched with the last letter
*/

object Encrypt {

  def encryptThis(text: String): String = {
    if (text == "") ""
    else {
      text.split(" ").map(w => {
        if (w.length < 2) w(0).toByte
        else if (w.length == 2) w(0).toByte.toString + w.last
        else w(0).toByte.toString + w.last + w.substring(2, w.length-1) + w(1) 
      }).mkString(" ")
    }
  }
}

// 09-26-19