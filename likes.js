function likes(names) {
  if (names.length == 0)
    return 'no one likes this'
  
  if (names.length > 3) {
    return names.slice(0,2).join(", ") + " and " + (names.length - 2).toString() + " others like this"
  } else {
    if (names.length > 1)     
      return names.slice(0, names.length-1).join(", ") + " and " + names[names.length-1] + " like this"
    else
      return names[0] + " likes this" 
  }
}