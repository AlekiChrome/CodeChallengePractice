// PROBLEM ID: MOVE ZEROS
// Markdown: 
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Example:
// ```
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// ```
// Note:
// You must do this in-place without making a copy of the array. Minimize the total number of operations.

const moveZeros = arr => {
    let nonZeroNums = [];
    let zeroNums = [];

    arr.forEach((elem) => {
        if (elem !== 0) {
            nonZeroNums.push(elem)
        } else {
            zeroNums.push(elem)
        }
    })
    return [...nonZeroNums, ...zeroNums]
}
console.log(moveZeros([1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0]))

