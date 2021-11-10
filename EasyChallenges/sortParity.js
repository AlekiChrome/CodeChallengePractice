// * Given an array of non-negative integers, return an array consisting of all the even elements, followed by all the odd elements.

// Example:

// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

// * Given non-negative numbers
// * returning an array of all even elements
// * followed by all odd elements

// * [2, 4, 3, 1]

// Potential Solution:
// A variable that will hold my reordered elements
// Loop through the array
// Design a condition that checks for even numbers 
// And also checks for odd numbers

const sortByParity = n => {
    let evens = [];
    let odds = []
  
    for (let i = 0; i < n.length; i++) {
      if (n[i] % 2 === 0) {
        evens.push(n[i])
      } else {
        odds.push(n[i])
      }
    }
    return [...evens, ...odds]
  }
  sortByParity([3,1,2,4]);
  
  const sortByParitySwap = n => {
    for (let i = 0, j = 0; i < n.length; j++) {
      if (n[j] % 2 === 0) {
        [ n[j], n[i++] ] = [ n[i], n[j] ];
      }
    }
    return n
  }
  
  console.log(sortByParitySwap([3,1,2,4]));