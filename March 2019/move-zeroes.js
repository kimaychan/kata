/**
 * Write an algorithm that takes an array and 
 * moves all of the zeros to the end, preserving the order of the other elements.
 * 
 * @param {*} arr 
 */
var moveZeros = (arr) => arr.filter(x=>x!==0).concat(arr.filter(x=>x===0))

//03-25-2019