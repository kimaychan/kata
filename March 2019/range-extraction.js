function solution(l){
  var list = l.sort((a, b)=> a-b),
    result = [], 
    range = { start: undefined, end: undefined }
    
  for(let i=0; i<list.length; i++) {
    if (list[i] + 1 == list[i + 1]) {
      range.end = undefined
      if (!range.start)
        range.start = list[i]
    } else {
      if (!range.end)
        range.end = list[i]

      if (range.end-range.start >=2) {
        result.push(range.start+"-"+range.end)
      } else { 
        result = result.concat([range.start,list[i]].filter(x=>x))
      }
      range.start = undefined
    }
  }
  
  return result.join(",")
}