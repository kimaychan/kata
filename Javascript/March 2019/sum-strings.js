function sumStrings(a,b) { 
  var carry = 0,
    sumArray = ""
    
  let al = a.length - 1, 
    bl = b.length - 1

  while(al >= 0 || bl >= 0) {
    let sum = (parseInt(a[al]) || 0) + (parseInt(b[bl]) || 0) + carry
    sumArray = (sum%10).toString() + sumArray
    carry = parseInt(sum/10)
    al--
    bl--
  }

  if (carry > 0) sumArray = carry.toString() + sumArray
  
  return sumArray.replace(/^0+/, '')
}