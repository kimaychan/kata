function spinWords(str){
  return str
    .split(" ")
    .map(s => {
      if (s.length >=5)
        return s.split("").reverse().join("")
      return s
    }).join(" ")
}