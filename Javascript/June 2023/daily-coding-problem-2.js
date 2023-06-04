/*
Given an array of integers, return a new array such that each element at index i 
of the new array is the product of all the numbers in the original array 
except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be 
[120, 60, 40, 30, 24]. If our input was [3, 2, 1], 
the expected output would be [2, 3, 6].
*/

const arr = [3, 2, 1]

function getProducts (arr) {
  return arr.reduce((resProd, _, i) => {
    const arrWithOutN = [...arr.slice(0, i), ...arr.slice(i + 1)]
    const product = arrWithOutN.reduce((res, x) => {
      return res * x      
    }, 1)
    resProd.push(product)
    return resProd
  }, [])
}

console.log(getProducts(arr))