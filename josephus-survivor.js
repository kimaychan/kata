function josephusSurvivor(n,k){
  var people = ((p) => {
    var p = []
    for(let i = 1; i <= n; i++) {
      p.push(i)
    }
    return p
  })(n)
  
  var josephus = ((people, interval) => {
    var res = people, currentPersonIndex = 0
    while (res.length > 1) {
      currentPersonIndex = (currentPersonIndex - 1 + interval) % res.length
      res.splice(currentPersonIndex, 1)
    }
    return res[0]
  })(people, k)
  
  return josephus
}