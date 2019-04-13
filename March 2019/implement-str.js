var strStr = function(haystack, needle) {
  let match = haystack.match(new RegExp(needle))
  return (["", haystack].includes(needle)) ? 0 : match != null ? match.index : -1
};