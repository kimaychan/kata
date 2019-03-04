function solution(input, markers) {
  var regex = new RegExp(markers.join("|").replace(/[-[\]{}()*+?.,\\^$\s]/g, '\\$&'))
  return input.split("\n")
    .map(str => {
      var markerIndex = (str.match(regex) || {}).index
      return (markerIndex ? str.substring(0, markerIndex) : str).replace(/ +$/, "")
    }).join("\n")
};