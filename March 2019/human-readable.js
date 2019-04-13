function humanReadable(seconds) {

  var addPadding = (n) => {
    return n <= 9 ? '0' + n : n
  }
  
  var hours = addPadding(Math.floor(seconds / 3600)),
    totalSeconds = seconds % 3600,
    minutes = addPadding(Math.floor(totalSeconds / 60)),
    seconds = addPadding(totalSeconds % 60)
    
    return hours + ":" + minutes + ":" + seconds
}