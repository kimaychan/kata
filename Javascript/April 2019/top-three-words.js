/**
 * Write a function that, given a string of text (possibly with punctuation and 
 * line-breaks), returns an array of the top-3 most occurring words, 
 * in descending order of the number of occurrences.
 */

function topThreeWords(text) {
  return text.split(/([^a-z']|\s)+/gi)
    .filter(x=>x.match(/[a-z]/gi))
    .reduce((res, v, k) => {
      let i = res.findIndex(x => x.hasOwnProperty(v.toLowerCase())),
        obj = {}
      obj[v.toLowerCase()] = text.match(new RegExp('\\b'+v+'\\b', 'gi')).length
      if (i === -1) res.push(obj) 
      return res
    }, [])
    .sort((a,b) => b[Object.keys(b)[0]] - a[Object.keys(a)[0]])
    .map(v => Object.keys(v)[0])
    .slice(0, 3)
}

//04-13-2019