function toUnderscore(string) {
  return string.toString()
    .split(/(?=[A-Z])/g)
    .join("_")
    .toLowerCase()
}