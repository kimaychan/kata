function firstNonRepeatingLetter(s) {
  return s.replace(/[?*)(]/g, "")
    .split("")
    .filter(str => {
      return s.match(new RegExp(str, "gi")).length == 1
    })[0] || ""
  }