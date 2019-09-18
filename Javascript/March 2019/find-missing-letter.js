function findMissingLetter(array){
  let i = 0, missingLetterFound = false
  while (!missingLetterFound) {
    if (array[i+1].charCodeAt(0) != array[i].charCodeAt(0) + 1) {
      missingLetterFound = true
      return String.fromCharCode(array[i].charCodeAt(0) + 1)
    }
    i++
  }
}