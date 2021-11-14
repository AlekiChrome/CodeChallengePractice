// Provided is a function find which accepts two parameters in the following order: 
// array, element and returns the index of the element if found and "Not found" otherwise. 
// Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. 
// (no more than 85) You may assume that all array elements are unique.


let array = [2,3,5,7,11];
const find = (arr, el) => {
    return arr.includes(el) ? arr.indexOf(el) : "Not found";
}
console.log(find(array, 5));
console.log(find(array, 11));
console.log(find(array, 3));
console.log(find(array, 2));
console.log(find(array, 7));
console.log(find(array, 1));