function positiveSum(arr) {
  return arr.reduce((sum, v) => v >=0 ? sum+=v : sum, 0)
}